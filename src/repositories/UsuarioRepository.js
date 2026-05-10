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

    static async create(createUsuarioData) {
        await db.read();

        const newUsuario = {
            id: uuidv4(),
            nome: createUsuarioData.nome,
            sobrenome: createUsuarioData.sobrenome,
            email: createUsuarioData.email
        };

        db.data.usuarios.push(newUsuario);

        await db.write();

        return newUsuario;
    }

    static async update(id, updateUsuarioData) {
        await db.read();

        const usuario = db.data.usuarios.find(usuario => usuario.id == id);

        if (!usuario) {
            return null;
        }

        Object.assign(usuario, updateUsuarioData);

        await db.write();

        return usuario;
    }

    static async delete(id) {
        await db.read();

        db.data.usuarios = db.data.usuarios.filter(usuario => usuario.id != id);

        await db.write();
    }
}

export default UsuarioRepository