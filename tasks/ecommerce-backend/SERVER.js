const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce API');
});

const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const cartOrdersRoutes = require('./routes/cartOrders');

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart-orders', cartOrdersRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));