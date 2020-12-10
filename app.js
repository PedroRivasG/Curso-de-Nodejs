const express = require('express');
const path = require('path');

const homeRouter= require('./routes/home');
const blogRouter = require('./routes/blog');
const contactoRouter = require('./routes/contacto');
const acercaRouter = require('./routes/acerca');

const server = express(); 
server.use(express.static(path.join(__dirname, 'public')));

server.use("/", homeRouter);
server.use("/acerca", acercaRouter);
server.use("/blog", blogRouter);
server.use("/contacto", contactoRouter);

server.listen(8080);
