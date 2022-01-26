// Imports
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const Task = require('../db/Models/Task');
// Routes

// Index - GET
router.get('/', async (req, res, next) => {
    try {
        const task = await Task.find({}).populate('owner').populate('comments.user')
        res.json(task)
    } catch(err) {
        next(err);
    }
});

// Show - GET
router.get('/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id).populate('owner').populate('comments.user');
        const allTasks = await Task.find({}).populate('owner').populate('comments.user');
        if (task) {
            res.json(allTasks);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Create - POST
router.post('/', async (req, res, next) => {
    try {
        const newTask = await Task.create(req.body)
			.populate('owner')
			.populate('comments.user');
        const allTasks = await Task.find({})
			.populate('owner')
			.populate('comments.user');
        res.json(allTasks);
    } catch(err) {
        next(err);
    }
});

// Update - PUT
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, overwrite: true }
		);
        const allTasks = await Task.find({})
			.populate('owner')
			.populate('comments.user');
        if (updatedTask) {
            res.json(allTasks);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Update - PATCH
router.patch('/:id', async (req, res, next) => {
    try {
        const taskToUpdate = await Task.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
        const allTasks = await Task.find({})
			.populate('owner')
			.populate('comments.user');
        if (taskToUpdate) {
            res.json(allTasks);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Delete - DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        const allTasks = await Task.find({})
			.populate('owner')
			.populate('comments.user');
        if (deletedTask) {
            res.json(allTasks);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Export

module.exports = router;