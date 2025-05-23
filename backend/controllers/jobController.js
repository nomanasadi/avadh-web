// const { v4: uuidv4 } = require('uuid');
// const Job = require('../models/Job');

// exports.createJob = async (req, res) => {
//   try {
//     const { title, description, location } = req.body;

//     const newJob = new Job({
//       title,
//       description,
//       location,
//       jobId: `JOB-${uuidv4().slice(0, 8)}` // Custom job ID like JOB-ab12cd34
//     });

//     const savedJob = await newJob.save();
//     res.status(201).json(savedJob);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };
