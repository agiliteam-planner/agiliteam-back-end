// Import the DB connection
const mongoose = require('../connection');

// Schema
const TaskSchema = new mongoose.Schema({
	title: String,
	description: String,
	stage: String,
	dueDate: Date,
	priority: Number,
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
	checklist: [
		{
			title: String,
			checked: Boolean,
		},
	],
	comments: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
			content: String,
			time: Date,
		},
	],
	files: [String],
});

// Instantiate the model called Task
const Task = mongoose.model('Task', TaskSchema);

// Export
module.exports = Task