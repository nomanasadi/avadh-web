const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
  {
    name: 'Papad Chivda',
    category: 'Namkeen',
    price: 5,
    quantity: 100,
    reviews: [
      { user: 'Ravi', rating: 4, comment: 'Crispy and tasty!' },
      { user: 'Meena', rating: 5, comment: 'My favorite snack.' },
    ],
  },
  {
    name: 'Sakkarpara',
    category: 'Namkeen',
    price: 5,
    quantity: 120,
    reviews: [
      { user: 'Ali', rating: 4, comment: 'Perfect for tea time.' },
    ],
  },
  {
    name: 'Tikhi Sev',
    category: 'Namkeen',
    price: 5,
    quantity: 90,
    reviews: [
      { user: 'Priya', rating: 5, comment: 'Nice spicy flavor!' },
    ],
  },
  {
    name: 'Aloo Sev',
    category: 'Namkeen',
    price: 5,
    quantity: 110,
    reviews: [],
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany(); // Optional: clear old data
    await Product.insertMany(products);
    console.log('Database seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedDatabase();
