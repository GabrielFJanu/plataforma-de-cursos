class CursoService {
    static async create(cursoData) {
        
        // regra de negócio: verificar se o criador (usuário) existe
        const criador = UserRepository.getById(cursoData.id_criador);

        if (!criador) {
            const criadorNotFoundError = new Error('Criador não encontrado');
            criadorNotFoundError.statusCode = 404;
            throw criadorNotFoundError;
        }

        newCurso = await CursoRepository.create(cursoData);
        return newCurso;
    }
}

export default CursoService;