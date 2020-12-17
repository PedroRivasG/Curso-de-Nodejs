import  express from 'express'
import controller from '../controllers/blog.js'
import bodyParser from 'body-parser' 

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true }));
//la paguina que necesitamos enviar
router.get('/', controller.renderizarBlog);
router.post('/', controller.post)

export default  router