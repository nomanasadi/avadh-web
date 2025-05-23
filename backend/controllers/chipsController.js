const Chips = require('../models/chipsModel');

const getAllChips = async (req, res) => {
  try {
    const items = await Chips.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createChips = async (req, res) => {
  try {
    const { name, imageUrl, availability } = req.body;
    const item = new Chips({ name, imageUrl, availability });
    const saved = await item.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllChips, createChips };
