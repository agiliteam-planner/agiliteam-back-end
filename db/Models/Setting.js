// Import the DB Connection
const mongoose = require('../connection')

// Schema
const SettingSchema = new mongoose.Schema (
    {
        stages: [String],
        url: String
    })

// Instantiate the model
const Setting = mongoose.model('Setting', SettingSchema);

// Export
module.exports = Setting