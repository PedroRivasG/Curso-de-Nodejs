export const renderizarInicio = (req, res) => {
    res.render("inicio.ejs", {path:"Inicio"});
}

export default { renderizarInicio }  