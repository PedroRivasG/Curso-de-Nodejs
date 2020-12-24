import {Usuario} from '../models/usuario.js'
import bcrypt  from 'bcrypt'

export const renderizarRegistro = (req, res) => {
    res.render("registro.ejs", {path: "Registro"});
}
export const renderizarLogin = (req, res) => {
    res.render("login.ejs", {path: "Login"});
}

const hashPassword = (password, res, callback) => {
    bcrypt.hash(password, 10, (error, hash) =>{
        if(error){
            res.status(500).end();        
        }else {
            callback(hash);
        } 
    });
}

export const registro = (req, res) => {
    const {nombrecompleto, correo, password} = req.body;
    const [primerNombre, primerApellido] = nombrecompleto.split(' ')
    hashPassword(password, res, (hash) =>{
        const nuevoUsuario = new Usuario({primerNombre:primerNombre, primerApellido:primerApellido, correo:correo, password:hash})
        nuevoUsuario.save().then((usuario) => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message:{message: "Correo Inválido"}});
        }) 
    })
}


export const login = (req,res) => {
    const {correo, password} = req.body;
    if(email === "" || password === ""){
        return res.status(400);
    }
    Usuario.findOne({correo:correo}, (err, usuario) =>{
        if(Usuario){
            bcrypt.compare(password, user.password, (err, isValid) =>{
                if (err){
                    return res.status(500).json({message:"Error"})
                }
                if (isValid){
                    registro.redirect("/");
                }else {
                    res.status(400).json({message:"Invalid data"})
                }
            })
        }
    })

}

export default {renderizarRegistro, renderizarLogin, registro, login}