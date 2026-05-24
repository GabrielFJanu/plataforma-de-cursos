import AuthService from "../services/AuthService.js";

class AuthController {
    static async login(req, res, next) {
        try {
            const loginData = req.body;

            const token = await AuthService.login(loginData);

            res.status(200).json({ token });
        }
        catch (error) {
            next(error);
        }
    }

    static async register(req, res, next) {
        try {
            const registerData = req.body;

            const userDto = await AuthService.register(registerData);

            res.status(201).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }
}

export default AuthController;