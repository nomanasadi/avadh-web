const mongoose = require('mongoose');

const namkeenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  availability: { type: Number, default: 0 }
});

module.exports = mongoose.model('Namkeen', namkeenSchema);
