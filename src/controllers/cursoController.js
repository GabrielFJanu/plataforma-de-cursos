import db from '../database/database.js'
import { randomUUID } from "node:crypto";

class CursoController {

    static list(req, res) {
        res.status(200).json(db.data.cursos);
    }

    static fetchById(req, res) {
        const id = req.params.id;
        
        const curso = db.data.cursos.find(curso => curso.id == id);

        if (!curso) {
            res.status(404).json({ message: "Curso não encontrado" });
            return;
        }

        res.status(200).json(curso)
    }

    static async create(req, res) {
        const { titulo, descricao, area_conhecimento, url, id_dono } = req.body;

        const newCurso = {
            id: randomUUID(),
            titulo,
            descricao,
            area_conhecimento,
            url,
            id_dono
        };

        db.data.cursos.push(newCurso);

        await db.write();

        res.status(201).json(newCurso);
    }
}

export default CursoController