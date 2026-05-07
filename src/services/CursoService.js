import CursoRepository from "../repositories/cursoRepository";

class CursoService {
    static getAll() {
        const cursos = CursoRepository.getAll();
        return cursos;
    }

    static getById(id) {
        const cursoFromDb = CursoRepository.getById(id);

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
        const criador = UserRepository.getById(cursoData.id_criador);

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