const http = require('http');

const server = http.createServer ((req, res) =>{
    res.writeHead(200, {"Content-Type": "application/json"})
    res.write('Hola Mundo')
    res.end();
})

server.listen(8080);