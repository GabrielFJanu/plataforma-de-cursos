import CursoService from "../services/CursoService.js";

class CursoController {

    static async getAll(req, res, next) {
        try {
            const cursosDto = await CursoService.getAll();

            res.status(200).json(cursosDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const cursoDto = await CursoService.getById(id);

            res.status(200).json(cursoDto)
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const createCursoData = req.body;

            const newCursoDto = await CursoService.create(createCursoData);

            res.status(201).json(newCursoDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateCursoData = req.body;

            const cursoDto = await CursoService.update(id, updateCursoData);

            res.status(200).json(cursoDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id;

            await CursoService.delete(id);

            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}

export default CursoController