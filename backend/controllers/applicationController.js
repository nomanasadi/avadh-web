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


const getAllApplication = async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { applyForJob , getApplicationById , getAllApplication };
