export const renderizarAcerca = (req, res) => {
    res.render("acerca.ejs", {path:"Acerca"});
}

export default { renderizarAcerca }