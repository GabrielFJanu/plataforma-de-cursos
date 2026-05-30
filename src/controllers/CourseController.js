import courseService from "../services/CourseService.js";

class CourseController {

    async create(req, res, next) {
        try {
            const createCourseData = req.body;
            const creatorId = req.user.id;

            const newCourseDto = await courseService.create(createCourseData, creatorId);

            res.status(201).json(newCourseDto);
        }
        catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const coursesDto = await courseService.getAll();

            res.status(200).json(coursesDto);
        }
        catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const courseDto = await courseService.getById(id);

            res.status(200).json(courseDto)
        }
        catch (error) {
            next(error);
        }
    }

    async replace(req, res, next) {
        try {
            const id = req.params.id;
            const replaceCourseData = req.body;

            const courseDto = await courseService.replace(id, replaceCourseData);

            res.status(200).json(courseDto);
        }
        catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateCourseData = req.body;

            const courseDto = await courseService.update(id, updateCourseData);

            res.status(200).json(courseDto);
        }
        catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;

            await courseService.delete(id);

            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}

export default new CourseController();