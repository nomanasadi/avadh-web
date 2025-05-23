const Namkeen = require('../models/Namkeen');

const getAllNamkeen = async (req, res) => {
  const items = await Namkeen.find();
  res.json(items);
};

const createNamkeen = async (req, res) => {
  const { name, imageUrl, availability } = req.body;
  const item = new Namkeen({ name, imageUrl, availability });
  const saved = await item.save();
  res.status(201).json(saved);
};

module.exports = { getAllNamkeen, createNamkeen };
