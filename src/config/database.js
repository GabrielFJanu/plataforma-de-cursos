import 'dotenv/config';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;
export async function connectDB() {
    try {
        await client.connect();
        db = client.db('PlataformaDeCursos');
    } catch (error) {
        console.error('Falha ao conectar ao banco de dados', error);
        process.exit(1);
    }
};

export function getDB(){ return db; }