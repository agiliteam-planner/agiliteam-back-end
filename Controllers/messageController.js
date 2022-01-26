// Imports
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const Message = require('../db/Models/Message.js');

// Routes

// Index - GET
router.get('/messages', async (req, res, next) => {
	try {
		const messages = await Message.find({});
		res.json(messages);
	} catch (err) {
		next(err);
	}
});

// Show - GET
router.get('/messages/:id', async (req, res, next) => {
	try {
		const message = await Message.findById(req.params.id);
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
router.post('/messages', async (req, res, next) => {
	try {
		const newMessage = await Message.create(req.body);
		res.json(newMessage);
	} catch (err) {
		next(err);
	}
});

// Update - PUT
router.put('/messages/:id', async (req, res, next) => {
	try {
		const updatedMessage = await Message.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, overwrite: true }
		);
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
router.patch('/messages/:id', async (req, res, next) => {
	try {
		const messageToUpdate = await Message.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
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
router.delete('/messages/:id', async (req, res, enxt) => {
	try {
		const deletedMessage = await Message.findByIdAndDelete(req.params.id);
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
