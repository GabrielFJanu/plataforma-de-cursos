import { CursoResponseDto } from "../dtos/cursoDto.js";
import CursoRepository from "../repositories/CursoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";
import { createHttpError } from "../utils/createHttpError.js";

class CursoService {
    static async getAll() {
        const cursosFromDb = await CursoRepository.getAll();
        
        const cursosDto = cursosFromDb.map(cursoFromDb => new CursoResponseDto(cursoFromDb));
        return cursosDto
    }

    static async getById(id) {
        const cursoFromDb = await CursoRepository.getById(id);

        if (!cursoFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        const cursoDto = new CursoResponseDto(cursoFromDb);
        return cursoDto;
    }

    static async create(createCursoData) {
        const criador = await UsuarioRepository.getById(createCursoData.id_criador);

        if (!criador) {
            throw createHttpError('Criador não encontrado', 404);
        }

        const cursoFromDb = await CursoRepository.create(createCursoData);

        const cursoDto = new CursoResponseDto(cursoFromDb);
        return cursoDto;
    }

    static async update(id, updateCursoData) {
        if (Object.keys(updateCursoData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const cursoFromDb = await CursoRepository.getById(id);

        if (!cursoFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        if (updateCursoData.id_criador !== undefined) {
            const criador = await UsuarioRepository.getById(updateCursoData.id_criador);

            if (!criador) {
                throw createHttpError('Criador não encontrado', 404);
            }
        }

        const updatedCursoFromDb = await CursoRepository.update(id, updateCursoData);

        const updatedCursoDto = new CursoResponseDto(updatedCursoFromDb);
        return updatedCursoDto;
    }

}

export default CursoService;