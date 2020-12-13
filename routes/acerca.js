import express from 'express'
import  controller  from '../controllers/acerca.js'

const router = express.Router()

router.get('/', controller.renderizarAcerca);

export default router