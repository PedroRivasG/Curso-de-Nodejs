import {Usuario} from '../models/usuario.js'

export const renderizarRegistro = (req, res) => {
    res.render("registro.ejs", {path: "Registro"});
}
export const renderizarLogin = (req, res) => {
    res.render("registro.ejs", {path: "Registro"});
}

export const registro = (req, res) => {
    const {nombrecompleto, correo, password} = req.body;
    const [primerNombre, primerApellido] = nombrecompleto.split(' ')
    const nuevoUsuario = new Usuario({primerNombre, primerApellido, correo, password})
    nuevoUsuario.save().then((usuario) => {
        res.direct('/');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({message:{message: "Invalid Email"}});
    })
}

export const login = (req,res) => {

}

export default {renderizarRegistro, renderizarLogin, registro, login}