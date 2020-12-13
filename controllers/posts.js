export const renderizarPost = (req, res) => {
    res.render("posts.ejs", {path:"Post"});
}

export default { renderizarPost }