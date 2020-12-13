import express from 'express'
import controller from '../controllers/inicio.js'

const router = express.Router()

router.get('/', controller.renderizarInicio);

export default  router