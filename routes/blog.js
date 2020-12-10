const express = require('express');
const controller = require('../controllers/blog');

const router = express.Router()

//la paguina que necesitamos enviar
router.get('/', controller.renderizarBlog);

module.exports = router