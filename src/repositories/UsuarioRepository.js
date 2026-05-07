import db from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';

class UsuarioRepository {
    static async getAll(){
        await db.read();

        const usuarios = db.data.usuarios;
        return usuarios;
    }

    static async getById(id) {
        await db.read();

        const usuario = db.data.usuarios.find(usuario => usuario.id == id);
        return usuario;
    }

    static async create({nome, sobrenome, email}) {
        await db.read();

        const newUsuario = {
            id: uuidv4(),
            nome,
            sobrenome,
            email
        };

        db.data.usuarios.push(newUsuario);

        await db.write();

        return newUsuario;
    }
}

export default UsuarioRepository