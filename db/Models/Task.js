// Import the DB connection
const mongoose = require('../connection');

// Schema
const TaskSchema = new mongoose.Schema (
    {
       title: String,
       description: String,
       stage: String,
       dueDate: String,
       priority: Number,
       owner: String,
       checklist: [
           {
               title: String,
               checked: Boolean
           }
       ],
       comments: [
            {
                user: String,
                content: String,
                time: String
            }
       ],
       files: [String]
    }
)

// Instantiate the model called Task
const Task = mongoose.model('Task', TaskSchema);

// Export
module.exports = Task