import AuthService from "../services/AuthService.js";

class AuthController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const token = await AuthService.login(email, password);

            res.status(200).json({ token });
        }
        catch (error) {
            next(error);
        }
    }
}

export default AuthController;