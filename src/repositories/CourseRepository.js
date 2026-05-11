import db from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';

class CourseRepository {
    static async getAll(){
        await db.read();

        const courses = db.data.courses;
        return courses;
    }

    static async getById(id) {
        await db.read();

        const course = db.data.courses.find(course => course.id == id);
        return course;
    }

    static async create(createCourseData) {
        await db.read();

        const newCourse = {
            id: uuidv4(),
            ...createCourseData
        };

        db.data.courses.push(newCourse);

        await db.write();

        return newCourse
    }

    static async update(id, updateCourseData) {
        await db.read();

        const course = db.data.courses.find(course => course.id == id);

        if (!course) {
            return null;
        }

        Object.assign(course, updateCourseData);

        await db.write();

        return course;
    }

    static async delete(id) {
        await db.read();

        db.data.courses = db.data.courses.filter(course => course.id != id);

        await db.write();
    }

    static async getByUserId(userId) {
        await db.read();

        const courses = db.data.courses.filter(course => course.creatorId == userId);
        return courses;
    }
}

export default CourseRepository