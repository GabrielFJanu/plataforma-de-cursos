import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioService {
    static async getAll() {
        const usuarios = await UsuarioRepository.getAll();
        return usuarios;
    }

    static async getById(id) {
        const usuarioFromDb = await UsuarioRepository.getById(id);

        // regra de negócio: verificar se o usuario existe
        if (!usuarioFromDb) {
            const usuarioNotFoundError = new Error('Usuário não encontrado');
            usuarioNotFoundError.statusCode = 404;
            throw usuarioNotFoundError;
        }

        return usuarioFromDb;
    }

    static async create(usuarioData) {
        const newUsuario = await UsuarioRepository.create(usuarioData);
        return newUsuario;
    }
}

export default UsuarioService;