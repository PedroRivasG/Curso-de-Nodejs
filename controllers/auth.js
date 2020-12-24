import {Usuario} from '../models/usuario.js'
import bcrypt  from 'bcrypt'

export const renderizarRegistro = (req, res) => {
    res.render("registration.ejs", {path: "Registration"});
}
export const renderizarLogin = (req, res) => {
    res.render("login.ejs", {path: "Login"});
}

const hashPassword = (password, res, callback) => {
    bcrypt.hash(password, 10, (error, hash) =>{
        if(error){
            console.log(err); 
            return res.status(500).send({error: "Something went wront"})        
        }else {
            console.log(hash)
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
           return res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({message:{message: "Correo Inválido"}});
        }) 
    })
}


export const login = (req,res) => {
    const {correo, password} = req.body;
    if(correo === "" || password === ""){
        return res.status(400).send({message:"Invalid Credentials"})
    }

    Usuario.findOne({correo:correo}, (err, usuario) =>{
        if(Usuario){
            bcrypt.compare(password, usuario.password, (err, isValid) =>{
                console.log(err, isValid)
                if (isValid) {
                   return res.redirect('/');
                }else {
                    return res.status(400).json({message:"Datos incorrectos"})
                }
            })
        }
    })

}

export default {renderizarRegistro, renderizarLogin, registro, login}