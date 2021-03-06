import express from 'express'
import controller from '../controllers/auth.js'
import bodyParser from 'body-parser' 

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', controller.renderizarRegistro);
router.get('/login', controller.renderizarLogin);
router.get('/registro', controller.renderizarRegistro);

router.post('/registro', controller.registro);
router.post('/login', controller.login);

export default  router