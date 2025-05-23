const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true,
  },
  applicantEmail: {
    type: String,
    required: true,
  },
  resumeLink: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: ['SR', 'SO', 'ASM', 'HR'],
    default: 'SR',
  },
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
