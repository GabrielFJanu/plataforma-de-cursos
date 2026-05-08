import { CursoResponseDto } from "../dtos/cursoDtos.js";
import CursoRepository from "../repositories/CursoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class CursoService {
    static async getAll() {
        const cursosFromDb = await CursoRepository.getAll();
        const cursosResponseDto = cursosFromDb.map(cursoFromDb => new CursoResponseDto(cursoFromDb));
        return cursosResponseDto
    }

    static async getById(id) {
        const cursoFromDb = await CursoRepository.getById(id);

        // regra de negócio: verificar se o curso existe
        if (!cursoFromDb) {
            const cursoNotFoundError = new Error('Curso não encontrado');
            cursoNotFoundError.statusCode = 404;
            throw cursoNotFoundError;
        }

        const cursoResponseDto = new CursoResponseDto(cursoFromDb);
        return cursoResponseDto;
    }

    static async create(cursoData) {
        
        // regra de negócio: verificar se o criador (usuário) existe
        const criador = await UsuarioRepository.getById(cursoData.id_criador);

        if (!criador) {
            const criadorNotFoundError = new Error('Criador não encontrado');
            criadorNotFoundError.statusCode = 404;
            throw criadorNotFoundError;
        }

        const cursoFromDb = await CursoRepository.create(cursoData);
        const cursoResponseDto = new CursoResponseDto(cursoFromDb);
        return cursoResponseDto;
    }
}

export default CursoService;