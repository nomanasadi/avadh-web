const mongoose = require('mongoose');

const fryumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  availability: { type: Number, default: 0 }
});

module.exports = mongoose.model('Fryum', fryumSchema);
