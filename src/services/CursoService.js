import CursoRepository from "../repositories/CursoRepository.js";
import UsuarioRepository from "../repositories/UsuarioRepository.js";

class CursoService {
    static async getAll() {
        const cursos = await CursoRepository.getAll();
        return cursos;
    }

    static async getById(id) {
        const cursoFromDb = await CursoRepository.getById(id);

        // regra de negócio: verificar se o curso existe
        if (!cursoFromDb) {
            const cursoNotFoundError = new Error('Curso não encontrado');
            cursoNotFoundError.statusCode = 404;
            throw cursoNotFoundError;
        }

        return cursoFromDb;
    }

    static async create(cursoData) {
        
        // regra de negócio: verificar se o criador (usuário) existe
        const criador = await UsuarioRepository.getById(cursoData.id_criador);

        if (!criador) {
            const criadorNotFoundError = new Error('Criador não encontrado');
            criadorNotFoundError.statusCode = 404;
            throw criadorNotFoundError;
        }

        const newCurso = await CursoRepository.create(cursoData);
        return newCurso;
    }
}

export default CursoService;