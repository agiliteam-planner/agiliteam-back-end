// Import mongoose and dotenv
require('dotenv').config();
const mongoose = require('mongoose')

// DB URL
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// DB Connection
mongoose.connect(mongoURI);

// Connection Messages
db.on('error', (err) => console.log(err.message + 'is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected at:', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))
// Open connection
db.on('open', () => {
    console.log('🪄mongo connection made!')})

// Export
module.exports = mongoose;