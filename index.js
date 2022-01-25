// Imports
const express = require('express');
const app = express();
const cors = require('cors');
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.get('/', (req, res) =>
{res.redirect('/tasks')});
// Start Controllers
const taskController = require('./controllers/taskController')
const userController = require('./controllers/userController')
const messageController = require('./controllers/userController')
// End Controllers

// Redirect Requests
app.use('/tasks', taskController)
// Failure handler
appl.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).send(message);
})

// Listener
app.listen(app.get('port'), () => {console.log(`Listening on port ${process.env.PORT}/3000`)})