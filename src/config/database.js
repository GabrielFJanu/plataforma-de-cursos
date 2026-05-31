import mongoose from 'mongoose';
import 'dotenv/config';

const uri = process.env.MONGO_URI;

export async function connectDB() {
    try {
        await mongoose.connect(uri, {
            dbName: 'plataformadecursos'
        });
    } catch (error) {
        console.error('Falha ao conectar ao banco de dados', error);
        process.exit(1);
    }
};