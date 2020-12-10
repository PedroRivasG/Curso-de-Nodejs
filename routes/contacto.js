const express = require('express');
const controller = require('../controllers/contacto');

const router = express.Router()

router.get('/', controller.renderizarContacto);

module.exports = router