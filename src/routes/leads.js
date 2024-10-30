const express = require('express');
const { body } = require('express-validator');
const leadController = require('../controllers/leadController');
const auth = require('../middleware/auth');

const router = express.Router();

// Validation middleware
const validateLead = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().matches(/^\+?[\d\s-]+$/).withMessage('Invalid phone number'),
  body('status').optional().isIn(['New', 'Contacted', 'Qualified', 'Proposal', 'Negotiation', 'Closed']),
  body('source').optional().isIn(['IDX Website', 'Facebook', 'LinkedIn', 'Phone', 'Email', 'Other']),
  body('score').optional().isInt({ min: 0, max: 100 }),
  body('value').optional().isNumeric()
];

// Routes
router.get('/', auth, leadController.getLeads);
router.get('/:id', auth, leadController.getLead);
router.post('/', auth, validateLead, leadController.createLead);
router.put('/:id', auth, validateLead, leadController.updateLead);
router.delete('/:id', auth, leadController.deleteLead);
router.post('/:id/activity', auth, leadController.addWebsiteActivity);

module.exports = router;