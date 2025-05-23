const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const namkeenRoutes = require('./routes/namkeenRoutes');
const fryumsRoutes = require('./routes/fryumsRoutes');
const chipsRoutes = require('./routes/chipsRoutes');  // Added Chips routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const applicationRoutes = require('./routes/applications');
const employeeRoutes = require('./routes/employees');



dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/namkeen', namkeenRoutes);
app.use('/api/fryums', fryumsRoutes);
app.use('/api/chips', chipsRoutes);  // Added Chips API route
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/employees', employeeRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
