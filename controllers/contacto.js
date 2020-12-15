export const renderizarContacto = (req, res) => {
    res.render("contacto.ejs", {path:"Contacto"});
}
const contacto = (req, res) => {
    res.send(req.body);
}

export default { renderizarContacto, contacto }
