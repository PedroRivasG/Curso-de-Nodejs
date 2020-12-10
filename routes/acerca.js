const express = require('express');
const controller = require('../controllers/acerca');

const router = express.Router()

router.get('/', controller.renderizarAcerca);

module.exports = router