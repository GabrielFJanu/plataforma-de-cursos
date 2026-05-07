import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { usuarioGetByIdValidation, usuarioCreateValidation } from "../validators/usuarioValidator.js";
import { handleValidationErrors } from "../middlewares/validatorMiddleware.js";

const usuarioRouter = Router();

usuarioRouter.get('/', UsuarioController.getAll);
usuarioRouter.get('/:id', usuarioGetByIdValidation, handleValidationErrors, UsuarioController.getById);
usuarioRouter.post('/', usuarioCreateValidation, handleValidationErrors, UsuarioController.create);

export default usuarioRouter;