import express from 'express'
import controller from '../controllers/contacto.js'
import bodyParser from 'body-parser' 

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true }));

router.get('/', controller.renderizarContacto);
router.post('/', controller.contacto);

export default  router