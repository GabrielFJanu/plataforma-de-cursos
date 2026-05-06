import CursoService from "../services/CursoService";

class CursoController {

    static getAll(req, res) {
        cursos = CursoService.getAll();

        res.status(200).json(cursos);
    }

    static getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const curso = CursoService.getById(id);

            res.status(200).json(curso)
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const cursoData = req.body;

            const newCurso = await CursoService.create(cursoData);

            res.status(201).json(newCurso);
        }
        catch (error) {
            next(error);
        }
    }
}

export default CursoController