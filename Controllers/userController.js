// // Imports
// const express = require('express');
// const { route } = requires('express/lib/router');
// const router = express.Router();
// const User = requires('../db/Models/User.js');

// // Routes

// // Index - GET
// router.get('/users', async (req, res, next) => {
//     try {
//         const users = await User.find({});
//         res.json(users)
//     } catch(err) {
//         next(err);
//     }
// });

// // Show - GET
// router.get('/users/:id', async (req, res, next) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (user) {
//             res.json(user);
//         } else {
//             res.sendStatus(404);
//         }
//     } catch(err) {
//         next(err);
//     }
// });

// // 