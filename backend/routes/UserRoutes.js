const express = require('express');
const userRouter = express.Router();

const {getCurrentUser} = require('../controllers/UserController');
const {authMiddleware} = require("../middleware/auth");

userRouter.post('/current',authMiddleware, getCurrentUser);

module.exports = userRouter;