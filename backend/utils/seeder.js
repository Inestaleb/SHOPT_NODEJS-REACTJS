const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');
const products = require('../data/product.json');

// Load environment variables
dotenv.config({ path: 'backend/config/config.env' });

// Connect to the database
connectDatabase();

const seedProducts = async () => {
    try {
        // Delete existing products
        await Product.deleteMany();
        console.log('Products are deleted');

        // Insert new products
        await Product.insertMany(products);
        console.log('All Products are added.');
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedProducts();
