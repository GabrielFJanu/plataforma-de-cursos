import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;
const connectDB = async () => {
    try {
        await client.connect();
        db = client.db('PlataformaDeCursos');
    } catch (error) {
        console.error('Falha ao conectar ao banco de dados', error);
        process.exit(1);
    }
};

const getDB = () => db;

export { connectDB, getDB };