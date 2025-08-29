const express = require('express');
const authRouter = express.Router();

const {loginHandler, signupHandler, logoutHandler} = require('../controllers/AuthController');

authRouter.post('/login', loginHandler);
authRouter.post('/signup', signupHandler);
authRouter.get('/logout', logoutHandler);

module.exports = authRouter;