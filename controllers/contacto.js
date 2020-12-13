export const renderizarContacto = (req, res) => {
    res.render("contacto.ejs", {path:"Contacto"});
}
export default { renderizarContacto }