class WebController {
    static async index(req, res, next) {
        try {
            res.render('index');
        }
        catch (error) {
            next(error);
        }
    }
}

export default WebController;