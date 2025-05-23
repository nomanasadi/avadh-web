const Fryum = require('../models/fryumsModel');

const getAllFryums = async (req, res) => {
  try {
    const items = await Fryum.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFryum = async (req, res) => {
  try {
    const { name, imageUrl, availability } = req.body;
    const item = new Fryum({ name, imageUrl, availability });
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllFryums, createFryum };
