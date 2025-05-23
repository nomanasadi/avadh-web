const Employee = require("../models/Employee");

const getAllApplicants = async (req, res) => {
  try {
    const applicants = await Employee.find({}, 'applicantName designation');
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getApplicantById = async (req, res) => {
  try {
    const applicant = await Employee.findById(req.params.id);
    if (!applicant) return res.status(404).json({ message: 'Applicant not found' });
    res.json(applicant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllApplicants,
  getApplicantById,
};
