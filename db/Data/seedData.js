// Import Model(s)
const Task = require('../Models/Task');
const Setting = require('../Models/Setting');
const Message = require('../Models/Message');
const User = require('../Models/User')
// Import Seed(s)
const taskSeed = require('../Data/tasks.json');
const settingSeed = require('../Data/settings.json');
const messageSeed = require('../Data/mesages.json');
const userSeed = require('../Data/users.json')

// User.deleteMany({})
// 	.then(() => {
// 		console.log('Deleted Users!');
// 		return User.insertMany(userSeed);
// 	})
// 	.then((users) => {
// 		console.log('Created Users', users);
// 	})
// 	.catch(console.error)
// 	.finally(() => process.exit());

// Task.deleteMany({})
//     .then(() => {
//         console.log('Deleted Tasks!');
//         return Task.insertMany(taskSeed);
//     })
//     .then((tasks) => {
//         console.log('Created tasks', tasks);
//     })  
//     .catch(console.error)
//     .finally(() => process.exit())

// Setting.deleteMany({})
// 	.then(() => {
// 		console.log('Deleted settings!');
// 		return Setting.insertMany(settingSeed);
//     })
// 	.then((settings) => {
// 		console.log('Created settings', settings);
// 	})
// 	.catch(console.error)
// 	.finally(() => process.exit());

Message.deleteMany({})
	.then(() => {
		console.log('Deleted Messages!');
		return Message.insertMany(messageSeed);
	})
	.then((messages) => {
		console.log('Created Messages', messages);
	})
	.catch(console.error)
	.finally(() => process.exit());