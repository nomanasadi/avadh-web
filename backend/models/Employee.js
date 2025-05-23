const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
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
  monthlySales: {
    type: Map,
    of: Number, // Example: { Jan: 1200, Feb: 1000, ... }
    default: {},
  }
}, { timestamps: true });

module.exports = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
