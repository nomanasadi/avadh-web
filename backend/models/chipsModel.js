const mongoose = require('mongoose');

const chipsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  availability: { type: Number, default: 5 } // Default to 5
});

module.exports = mongoose.model('Chips', chipsSchema);
