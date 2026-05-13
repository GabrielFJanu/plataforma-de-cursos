import CourseService from "../services/CourseService.js";

class WebController {
    static async index(req, res, next) {
        try {
            const coursesWithCreatorDto = await CourseService.getAllWithCreator();

            res.render('index', {
                title: 'index',
                courses: coursesWithCreatorDto
            });
        }
        catch (error) {
            next(error);
        }
    }
}

export default WebController;