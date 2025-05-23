
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number,
  reviews: [reviewSchema],
});

module.exports = mongoose.model('Product', productSchema);
