import  express from 'express'
import controller from '../controllers/blog.js'
import bodyParser from 'body-parser' 
import { render } from 'ejs';

const router = express.Router()

//la paguina que necesitamos enviar
router.use(bodyParser.urlencoded({ extended: true }));
router.get('/', controller.renderizarBlog);
router.post('/new-post', controller.newPost)
router.get('/new-post', controller.renderizarNewPost)
router.get("/detalle/:id",controller.detalle)

export default  router