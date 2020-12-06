const http = require('http');

const server = http.createServer ((req, res) =>{
    res.writeHead(200, {"Content-Type": "application/json"})
    res.write('Esta es una prueba de el servidor')
    res.end();
})

server.listen(8080);