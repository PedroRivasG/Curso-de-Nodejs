import express from 'express'
import controller from '../controllers/contacto.js'

const router = express.Router()

router.get('/', controller.renderizarContacto);

export default  router