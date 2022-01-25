// Import the DB Connection
const mongoose = require('../connection');

// Schema
const MessageSchema = new mongoose.Schema(
{
	user: String,
    time: Date,
    content: String,
}
);

// Instantiate the model
const Message = mongoose.model('Message', MessageSchema);

// Export
module.exports = Message;