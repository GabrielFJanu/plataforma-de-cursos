import courseService from "../services/CourseService.js";

class WebController {
    async index(req, res, next) {
        try {
            const coursesWithCreatorDto = await courseService.getAllWithCreator();

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

export default new WebController();