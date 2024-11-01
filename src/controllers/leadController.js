const Lead = require('../models/Lead');
const { validationResult } = require('express-validator');
//comment for testing
//testing
exports.getLeads = async (req, res) => {
  try {
    const { status, source, search, sort = '-createdAt' } = req.query;
    
    let query = {};
    
    if (status) query.status = status;
    if (source) query.source = source;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const leads = await Lead.find(query)
      .sort(sort)
      .populate('assignedTo', 'name email');

    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate('assignedTo', 'name email');
      
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLead = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const lead = new Lead(req.body);
    await lead.save();
    
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    
    res.json({ message: 'Lead deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addWebsiteActivity = async (req, res) => {
  try {
    const { type, details } = req.body;
    
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          websiteActivity: {
            type,
            timestamp: new Date(),
            details
          }
        }
      },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }

    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};