exports.renderizarInicio = (req, res) => {
    res.sendFile(process.cwd() + "/views/inicio.html");
}