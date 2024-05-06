const { application } = require('express');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Restaurant')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


const db = mongoose.connection

module.exports = db