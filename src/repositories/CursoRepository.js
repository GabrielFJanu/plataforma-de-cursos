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

    static async create(createCursoData) {
        await db.read();

        const newCurso = {
            id: uuidv4(),
            titulo: createCursoData.titulo,
            descricao: createCursoData.descricao,
            area_conhecimento: createCursoData.area_conhecimento,
            url: createCursoData.url,
            id_criador: createCursoData.id_criador,
        };

        db.data.cursos.push(newCurso);

        await db.write();

        return newCurso
    }

    static async update(id, updateCursoData) {
        await db.read();

        const curso = db.data.cursos.find(curso => curso.id == id);

        if (!curso) {
            return null;
        }

        Object.assign(curso, updateCursoData);

        await db.write();

        return curso;
    }

    static async delete(id) {
        await db.read();

        db.data.cursos = db.data.cursos.filter(curso => curso.id != id);

        await db.write();
    }
}

export default CursoRepository