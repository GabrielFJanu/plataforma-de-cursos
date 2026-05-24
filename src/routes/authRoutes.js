import { Router } from "express";
import { validateLogin, validateRegister } from "../validators/authValidator.js";
import AuthController from "../controllers/AuthController.js";
import handleValidationError from "../middlewares/validatorMiddleware.js";

const authRouter = Router();

authRouter.post('/login', validateLogin, handleValidationError, AuthController.login);
authRouter.post('/register', validateRegister, handleValidationError, AuthController.register);

export default authRouter;