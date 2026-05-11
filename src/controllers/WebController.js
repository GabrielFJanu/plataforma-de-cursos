class WebController {
    static async renderIndex(req, res, next) {
        try {
            res.render('index');
        }
        catch (error) {
            next(error);
        }
    }
}

export default WebController;