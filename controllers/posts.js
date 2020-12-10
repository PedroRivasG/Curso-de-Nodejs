exports.renderizarPost = (req, res) => {
    res.sendFile(process.cwd() + "/views/posts.html");
}