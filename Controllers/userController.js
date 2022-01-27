// Imports
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const User = require('../db/Models/User.js');

// Routes

// Index - GET
router.get('/', async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json(users);
	} catch (err) {
		next(err);
	}
});

// Show - GET
router.get('/:id', async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
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
		const newUser = await User.create(req.body);
		const allUsers = await User.find({})
		res.json(allUsers);
	} catch (err) {
		next(err);
	}
});

// Update - PUT
router.put('/:id', async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, overwrite: true }
		);
		if (updatedUser) {
			res.json(updatedUser);
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
		const userToUpdate = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		if (userToUpdate) {
			res.json(userToUpdate);
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
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		if (deletedUser) {
			res.json(deletedUser);
		} else {
			res.sendStatus(404);
		}
	} catch (err) {
		next(err);
	}
});

// Export

module.exports = router;