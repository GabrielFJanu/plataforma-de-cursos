import CourseService from "../services/CourseService.js";

class WebController {
    static async index(req, res, next) {
        try {
            const coursesDto = await CourseService.findAll();

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

export default WebController;