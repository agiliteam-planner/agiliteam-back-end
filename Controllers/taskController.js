// Imports
const express = require('express');
const { route } = require('express/lib/router');
const Task = require('../db/Models/Task');
const router = express.Router();
// Routes

// Index - GET
router.get('/', async (req, res, next) => {
    try {
        const task = await Task.find({})
        res.json(task);
    } catch(err) {
        next(err);
    }
});

// Show - GET
router.get('/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(endpoint);
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
        const newTask = await Task.create(req.body);
        res.json(newTask);
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
            { new: true }
            );
        if (updatedTask) {
            res.json(updatedTask);
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
            { new: true}
            );
        if (taskToUpdate) {
            res.json(taskToUpdate);
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
        if (deletedTask) {
            res.json(deletedTask);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

module.exports = router;