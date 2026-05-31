import authService from '../services/AuthService.js';

class AuthController {
    async login(req, res, next) {
        try {
            const loginData = req.body;

            const token = await authService.login(loginData);

            res.status(200).json({ token });
        }
        catch (error) {
            next(error);
        }
    }

    async register(req, res, next) {
        try {
            const registerData = req.body;

            const userDto = await authService.register(registerData);

            res.status(201).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }
}

export default new AuthController();
