import mongoose from 'mongoose'

export const conectarDB = async () => {
    const conn = await mongoose.connect(process.env.DB_URI, {userNewUrlParser: true })
    console.log('Conectado a MongoDB: ${conn.connection.host}');
}