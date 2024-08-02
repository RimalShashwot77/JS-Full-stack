const mongoose = require('mongoose');

// Destructure Schema from mongoose
const { Schema } = mongoose;

// const schema = mongoose.Schema();

const productSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },

    dateAdded: {
        type: Date,
        default: Date.now,
    },

    category: {
        type: String,
        required: true,
    }
    
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;