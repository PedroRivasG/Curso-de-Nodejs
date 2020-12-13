import  express from 'express'
import controller from '../controllers/blog.js'

const router = express.Router()

//la paguina que necesitamos enviar
router.get('/', controller.renderizarBlog);

export default  router