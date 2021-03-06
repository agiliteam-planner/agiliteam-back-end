// Imports
const express = require('express');
const cors = require('cors');

// Instantiate Express App
const app = express();
app.set('port', process.env.PORT || 3111);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routesgit p

// Redirect
app.get('/', (req, res) => {
	res.redirect('/tasks');
});

// Start Controllers
const taskController = require('./Controllers/taskController');
const settingController = require('./Controllers/settingController');
const messageController = require('./Controllers/messageController');
const userController = require('./Controllers/userController');
// End Controllers

// Redirect Requests
app.use('/tasks', taskController);
app.use('/settings', settingController);
app.use('/messages', messageController);
app.use('/users', userController);

// Failure handler
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
});

// Listener
app.listen(app.get('port'), () => {
	console.log(`Listening on port ${app.get('port')} 🌟`);
});

module.exports = app;
