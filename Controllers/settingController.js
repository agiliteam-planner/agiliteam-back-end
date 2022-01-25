// Imports
const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const Setting = require('../db/Models/Setting.js');

// Routes

// Index - GET
router.get('/', async (req, res, next) => {
    try {
        const settings = await Setting.find({});
        res.json(settings)
    } catch(err) {
        next(err);
    }
});

// Show - GET
router.get('/:id', async (req, res, next) => {
    try {
        const setting = await Setting.findById(req.params.id);
        if (setting) {
            res.json(setting);
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
        const newSetting = await Setting.create(req.body);
        res.json(newSetting);
    } catch(err) {
        next(err);
    }
});

// Update - PUT
router.put('/:id', async (req, res, next) => {
    try {
        const updatedSetting = await Setting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, overwrite: true }
        );
        if (updatedSetting) {
            res.json(updatedSetting);
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
        const settingToUpdate = await Setting.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (settingToUpdate) {
            res.json(settingToUpdate);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Delete - DELETE
router.delete('/:id', async (req, res, enxt) => {
    try {
        const deletedSetting = await Setting.findByIdAndDelete(req.params.id);
        if (deletedSetting) {
            res.json(deletedSetting);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// Export

module.exports = router;