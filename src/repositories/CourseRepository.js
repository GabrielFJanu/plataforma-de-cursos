import db from '../database/database.js';
import { v4 as uuidv4 } from 'uuid';

class CourseRepository {

    static async create(createCourseData) {
        await db.read();

        const newCourse = {
            id: uuidv4(),
            ...createCourseData,
            createdAt: new Date().toISOString()
        };

        db.data.courses.push(newCourse);

        await db.write();

        return newCourse;
    }

    static async findAll(){
        await db.read();

        const courses = db.data.courses;
        return courses;
    }

    static async findById(id) {
        await db.read();

        const course = db.data.courses.find(course => course.id == id);
        return course;
    }

    static async findByIds(ids) {
        await db.read();

        const courses = db.data.courses.filter(course => ids.includes(course.id));
        return courses;
    }

    static async findByCreatorId(creatorId) {
        await db.read();

        const courses = db.data.courses.filter(course => course.creatorId == creatorId);
        return courses;
    }

    static async replace(id, replaceCourseData) {
        await db.read();

        const courseIndex = db.data.courses.findIndex(course => course.id === id);

        if (courseIndex === -1) {
            return null;
        }

        const currentCourse = db.data.courses[courseIndex];

        const replacedCourse = {
            id: currentCourse.id,
            ...replaceCourseData,
            createdAt: currentCourse.createdAt
        };

        db.data.courses[courseIndex] = replacedCourse;

        await db.write();

        return replacedCourse;
    }

    static async update(id, updateCourseData) {
        await db.read();

        const courseIndex = db.data.courses.findIndex(course => course.id === id);

        if (courseIndex === -1) {
            return null;
        }

        const currentCourse = db.data.courses[courseIndex];

        const updatedCourse = {
            ...currentCourse,
            ...updateCourseData
        };

        db.data.courses[courseIndex] = updatedCourse;

        await db.write();

        return updatedCourse;
    }

    static async delete(id) {
        await db.read();

        db.data.courses = db.data.courses.filter(course => course.id != id);

        await db.write();
    }
}

export default CourseRepository