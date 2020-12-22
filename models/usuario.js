import mongoose from 'mongoose'
const { Schema } = mongoose

const usuarioSchema = new Schema({
    primerNombre: {
        type: String,
        required: [true, "El primer nombre es requerido"]
    },
    primerApellido: {
        type: String,
        required: [true, "El primer Apellido es requerido"]
    },
    correo:  {
        type: String,
        unique: true,
        required: [true, "El correo es requerido"]
    },
    password:  {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
});


export const Usuario = mongoose.model('Usuario', usuarioSchema)