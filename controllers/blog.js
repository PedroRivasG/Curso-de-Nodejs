exports.renderizarBlog = (req, res) => {
    res.sendFile(process.cwd() + "/views/blog.html");
}

