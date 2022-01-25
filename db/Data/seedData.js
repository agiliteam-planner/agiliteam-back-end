// Import Model(s)
const Task = require('../Models/Task');
const Setting = require('../Models/Setting');
const Message = require('../Models/Message');
// Import Seed(s)
const taskSeed = require('../Data/tasks.json');
const settingSeed = require('../Data/settings.json');
const messageSeed = require('../Data/mesages.json');

Task.deleteMany({})
    .then(() => {
        console.log('Deleted Tasks!');
        return Task.insertMany(taskSeed);
    })
    .then((tasks) => {
        console.log('Created tasks', tasks);
        Setting.deleteMany({});
    })
    .then(() => {
        console.log('Deleted Settings!');
        return Setting.insertMany(settingSeed);
    })
    .then((settings) => {
        console.log('Created settings', settings);
        Message.deleteMany({});
    })
    .then(() => {
        console.log('Deleted Messages!');
        return Message.insertMany(messageSeed);
    })
    .then((messages) => {
        console.log('Created messages', messages);
    })
    .catch(console.error)
    .finally(() => process.exit())