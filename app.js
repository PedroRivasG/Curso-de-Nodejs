import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import {conectarDB} from './config/db.js'
import inicioRouter from './routes/inicio.js'
import blogRouter from './routes/blog.js'
import contactoRouter from './routes/contacto.js'
import acercaRouter from './routes/acerca.js'

dotenv.config();
conectarDB();
const server = express();

server.use(express.static(path.join(process.cwd(), 'public')));

server.set('views', path.join(process.cwd(), "views"));
server.set('view engine', 'ejs');

server.use("/", inicioRouter);
server.use("/acerca", acercaRouter);
server.use("/blog", blogRouter);
server.use("/contacto", contactoRouter);

server.listen(8080);