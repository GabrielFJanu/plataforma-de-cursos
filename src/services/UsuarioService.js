import { UsuarioResponseDto } from "../dtos/usuarioDto.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import { createHttpError } from "../utils/createHttpError.js";

class UsuarioService {
    static async getAll() {
        const usuariosFromDb = await UsuarioRepository.getAll();
        const usuariosDto = usuariosFromDb.map( usuarioFromDb => new UsuarioResponseDto(usuarioFromDb));
        return usuariosDto;
    }

    static async getById(id) {
        const usuarioFromDb = await UsuarioRepository.getById(id);

        if (!usuarioFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const usuarioDto = new UsuarioResponseDto(usuarioFromDb);
        return usuarioDto;
    }

    static async create(createUsuarioData) {
        const usuarioFromDb = await UsuarioRepository.create(createUsuarioData);

        const usuarioDto = new UsuarioResponseDto(usuarioFromDb);
        return usuarioDto;
    }

    static async update(id, updateUsuarioData) {
        if (Object.keys(updateUsuarioData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const usuarioFromDb = await UsuarioRepository.getById(id);

        if (!usuarioFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const updatedUsuarioFromDb = await UsuarioRepository.update(id, updateUsuarioData);

        const updatedUsuarioDto = new UsuarioResponseDto(updatedUsuarioFromDb);
        return updatedUsuarioDto;
    }

    static async delete(id) {
        const usuarioFromDb = await UsuarioRepository.getById(id);

        if (!usuarioFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        await UsuarioRepository.delete(id);
    }
}

export default UsuarioService;