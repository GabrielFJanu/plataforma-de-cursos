import { CursoResponseDto } from "../dtos/cursoDto.js";
import CursoRepository from "../repositories/CursoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class CursoService {
    static async getAll() {
        const cursosFromDb = await CursoRepository.getAll();
        const cursosDto = cursosFromDb.map(cursoFromDb => new CursoResponseDto(cursoFromDb));
        return cursosDto
    }

    static async getById(id) {
        const cursoFromDb = await CursoRepository.getById(id);

        // regra de negócio: verificar se o curso existe
        if (!cursoFromDb) {
            const cursoNotFoundError = new Error('Curso não encontrado');
            cursoNotFoundError.statusCode = 404;
            throw cursoNotFoundError;
        }

        const cursoDto = new CursoResponseDto(cursoFromDb);
        return cursoDto;
    }

    static async create(createCursoData) {
        
        // regra de negócio: verificar se o criador (usuário) existe
        const criador = await UsuarioRepository.getById(createCursoData.id_criador);

        if (!criador) {
            const criadorNotFoundError = new Error('Criador não encontrado');
            criadorNotFoundError.statusCode = 404;
            throw criadorNotFoundError;
        }

        const cursoFromDb = await CursoRepository.create(createCursoData);
        const cursoDto = new CursoResponseDto(cursoFromDb);
        return cursoDto;
    }

    static async update(id, updateCursoData) {
        // regra de negócio: verificar se existe pelo menos um campo a ser atualizado
        if (Object.keys(updateCursoData).length === 0) {
            const emptyUpdateDataError = new Error('Nenhum dado para atualização foi enviado');
            emptyUpdateDataError.statusCode = 400;
            throw emptyUpdateDataError;
        }

        // regra de negócio: se id_criador for atualizado, verificar se o criador (usuário) existe
        if (updateCursoData.id_criador) {
            const criador = await UsuarioRepository.getById(updateCursoData.id_criador);

            if (!criador) {
                const criadorNotFoundError = new Error('Criador não encontrado');
                criadorNotFoundError.statusCode = 404;
                throw criadorNotFoundError;
            }
        }

        const cursoFromDb = await CursoRepository.update(id, updateCursoData);

        // regra de negócio: verificar se o curso existe
        if (!cursoFromDb) {
            const cursoNotFoundError = new Error('Curso não encontrado');
            cursoNotFoundError.statusCode = 404;
            throw cursoNotFoundError;
        }

        const cursoDto = new CursoResponseDto(cursoFromDb);
        return cursoDto;
    }

}

export default CursoService;