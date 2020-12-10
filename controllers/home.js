exports.renderizarHome = (req, res) => {
    res.sendFile(process.cwd() + "/views/home.html");
}