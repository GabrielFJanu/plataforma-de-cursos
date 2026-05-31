import courseService from "../services/CourseService.js";

class WebController {
    async index(req, res, next) {
        try {
            const coursesDto = await courseService.getAll();

            res.render('index', {
                title: 'index',
                courses: coursesDto
            });
        }
        catch (error) {
            next(error);
        }
    }
}

export default new WebController();