// Imports
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const Message = require('../db/Models/Message.js');

// Routes

// Index - GET
router.get('/', async (req, res, next) => {
	try {
		const messages = await Message.find({}).populate('user');
		res.json(messages);
	} catch (err) {
		next(err);
	}
});

// Show - GET
router.get('/:id', async (req, res, next) => {
	try {
		const message = await Message.findById(req.params.id).populate('user');
		if (message) {
			res.json(message);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

// Create - POST
router.post('/', async (req, res, next) => {
	try {
		const newMessage = await Message.create(req.body).populate('user');
		res.json(newMessage);
	} catch (err) {
		next(err);
	}
});

// Update - PUT
router.put('/:id', async (req, res, next) => {
	try {
		const updatedMessage = await Message.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, overwrite: true }
		).populate('user');
		if (updatedMessage) {
			res.json(updatedMessage);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

// Update - PATCH
router.patch('/:id', async (req, res, next) => {
	try {
		const messageToUpdate = await Message.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		).populate('user');
		if (messageToUpdate) {
			res.json(messageToUpdate);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

// Delete - DELETE
router.delete('/:id', async (req, res, enxt) => {
	try {
		const deletedMessage = await Message.findByIdAndDelete(
			req.params.id
		).populate('user');
		if (deletedMessage) {
			res.json(deletedMessage);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

// Export

module.exports = router;
