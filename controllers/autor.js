import {Usuario} from '../models/usuario.js'

export const renderizarRegistro = (req, res) => {
    res.render("registro.ejs", {path: "Registro"});
}
export const renderizarLogin = (req, res) => {
    res.render("registro.ejs", {path: "Registro"});
}

export const registro = (req, res) => {
    res.renderizarRegistro("registro.ejs", {path:"Registro", errorMessage:{message:"Correo inválido"}})
    res.end();

    const{nombrecompleto, correo, password} = req.body;
    const [primerNombre, primerApellido] = nombrecompleto.split(' ')
    const nuevoUsuario = new Usuario({primerNombre, primerApellido, correo, password})
    nuevoUsuario.save().then((user) => {
        res.direct('/');
        res.end();
    })
    .catch(err => {
        console.log(err);
        res.status(403, {merrorMessage:{message:"Correo inválido"}})
        //res.status("registro.ejs", {path:"Registro", error:{"message":"El correo ya existe"}});
    })

    res.end();
    
}

export const login = (req,res) => {

}

export default {renderizarRegistro, renderizarLogin, registro, login}