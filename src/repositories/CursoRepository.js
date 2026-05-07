import db from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';

class CursoRepository {
    static async getAll(){
        await db.read();

        const cursos = db.data.cursos;
        return cursos;
    }

    static async getById(id) {
        await db.read();

        const curso = db.data.cursos.find(curso => curso.id == id);
        return curso;
    }

    static async create({titulo, descricao, area_conhecimento, url, id_criador}) {
        await db.read();

        const newCurso = {
            id: uuidv4(),
            titulo,
            descricao,
            area_conhecimento,
            url,
            id_criador,
        };

        db.data.cursos.push(newCurso);

        await db.write();

        return newCurso
    }
}

export default CursoRepository