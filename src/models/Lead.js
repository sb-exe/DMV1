const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  company: String,
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Proposal', 'Negotiation', 'Closed'],
    default: 'New'
  },
  source: {
    type: String,
    enum: ['IDX Website', 'Facebook', 'LinkedIn', 'Phone', 'Email', 'Other']
  },
  score: {
    type: Number,
    min: 0,
    max: 100
  },
  value: Number,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  propertyInterests: [{
    type: String
  }],
  notes: String,
  lastContact: Date,
  nextFollowUp: Date,
  websiteActivity: [{
    type: {
      type: String,
      enum: ['property_view', 'saved_search']
    },
    timestamp: Date,
    details: mongoose.Schema.Types.Mixed
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

leadSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Lead', leadSchema);