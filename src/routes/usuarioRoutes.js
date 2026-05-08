import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { getUsuarioByIdValidation, createUsuarioValidation } from "../validators/usuarioValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const usuarioRouter = Router();

usuarioRouter.get('/', UsuarioController.getAll);
usuarioRouter.get('/:id', getUsuarioByIdValidation, validationErrorHandler, UsuarioController.getById);
usuarioRouter.post('/', createUsuarioValidation, validationErrorHandler, UsuarioController.create);

export default usuarioRouter;