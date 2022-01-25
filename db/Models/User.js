// Import the DB Connection
const mongoose = require('../connection')

// Schema
const UserSchema = new mongoose.Schema (
    {
        username: String,
        firstName: String,
        lastName: String,
        image: String,
    });

// Instantiate the model
const User = mongoose.model('User', UserSchema);

// Export
module.exports = User