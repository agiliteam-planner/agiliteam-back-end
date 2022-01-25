// Import Model(s)
const Task = require('../Models/Task');
// Import Seed(s)
const taskSeed = require('./tasks.json');

Task.deleteMany({})
    .then(() => {
        console.log('Deleted Tasks!');
        return Task.insertMany(taskSeed);
    })
    .then((tasks) => {
        console.log('Created tasks', tasks);
    })
    .catch(console.error)
    .finally(() => process.exit())