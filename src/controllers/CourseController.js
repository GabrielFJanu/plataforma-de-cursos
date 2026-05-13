import CourseService from "../services/CourseService.js";

class CourseController {

    static async findAll(req, res, next) {
        try {
            const coursesDto = await CourseService.findAll();

            res.status(200).json(coursesDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async findById(req, res, next) {
        try {
            const id = req.params.id;
        
            const courseDto = await CourseService.findById(id);

            res.status(200).json(courseDto)
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const createCourseData = req.body;

            const newCourseDto = await CourseService.create(createCourseData);

            res.status(201).json(newCourseDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateCourseData = req.body;

            const courseDto = await CourseService.update(id, updateCourseData);

            res.status(200).json(courseDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id;

            await CourseService.delete(id);

            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}

export default CourseController