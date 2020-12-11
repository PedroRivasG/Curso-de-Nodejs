const express = require('express');
const controller = require('../controllers/inicio');

const router = express.Router()

router.get('/', controller.renderizarInicio);

module.exports = router