const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
    username: { type: String, required: true }, 
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 }, 
});

module.exports = mongoose.model('Cart', cartItemSchema);