const Application = require('../models/Application');

const applyForJob = async (req, res) => {
  try {
    const { applicantName, applicantEmail, resumeLink, designation } = req.body;

    if (!applicantName || !applicantEmail || !resumeLink) {
      return res.status(400).json({ message: 'Please fill in all required fields' });
    }

    const application = new Application({
      applicantName,
      applicantEmail,
      resumeLink,
      designation,
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { applyForJob };
