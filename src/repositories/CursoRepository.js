import db from '../config/database.js';
import { v4 as uuidv4 } from 'uuid';

class CursoRepository {
    static getAll(){
        const cursos = db.data.cursos;
        return cursos;
    }

    static getById(id) {
        const curso = db.data.cursos.find(curso => curso.id == id);
        return curso;
    }

    static async create({titulo, descricao, area_conhecimento, url, id_criador}) {

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