const express = require('express');
const controller = require('../controllers/auth');

const authRouter = express.Router()

//la paguina que necesitamos enviar
authRouter.get('/', controller.renderizarAuth);

module.exports = authRouter