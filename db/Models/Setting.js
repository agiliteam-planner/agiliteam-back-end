// Import the DB Connection
const mongoose = require('../connection')

// Schema
const SettingSchema = new mongoose.Schema (
    {
        users: [
            {
                username: String,
                firstName: String,
                lastName: String,
                image: String,
            }
        ],
        stages: [String]
    });

// Instantiate the model
const Setting = mongoose.model('Setting', SettingSchema);

// Export
module.exports = Setting