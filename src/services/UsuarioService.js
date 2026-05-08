import { UsuarioResponseDto } from "../dtos/usuarioDtos.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioService {
    static async getAll() {
        const usuariosFromDb = await UsuarioRepository.getAll();
        const usuariosDto = usuariosFromDb.map( usuarioFromDb => new UsuarioResponseDto(usuarioFromDb));
        return usuariosDto;
    }

    static async getById(id) {
        const usuarioFromDb = await UsuarioRepository.getById(id);

        // regra de negócio: verificar se o usuario existe
        if (!usuarioFromDb) {
            const usuarioNotFoundError = new Error('Usuário não encontrado');
            usuarioNotFoundError.statusCode = 404;
            throw usuarioNotFoundError;
        }

        const usuarioDto = new UsuarioResponseDto(usuarioFromDb);
        return usuarioDto;
    }

    static async create(createUsuarioData) {
        const newUsuarioFromDb = await UsuarioRepository.create(createUsuarioData);

        const usuarioDto = new UsuarioResponseDto(newUsuarioFromDb);
        return usuarioDto;
    }
}

export default UsuarioService;