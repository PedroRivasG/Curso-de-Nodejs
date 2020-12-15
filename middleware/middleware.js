const parseBody = (req, res, next) => {
    let datos = ''
    req.on('data', porcionDeDatos => {
        datos += porcionDeDatos
    })
    req.on('end', () => {
        const jsonBody = JSON.parse(datos)
        req.body = jsonBody
        next()
    })
}