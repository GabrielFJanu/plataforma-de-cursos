import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { getUsuarioByIdValidation, createUsuarioValidation, fullUpdateUsuarioValidation, partialUpdateUsuarioValidation } from "../validators/usuarioValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const usuarioRouter = Router();

usuarioRouter.get('/', UsuarioController.getAll);
usuarioRouter.get('/:id', getUsuarioByIdValidation, validationErrorHandler, UsuarioController.getById);
usuarioRouter.post('/', createUsuarioValidation, validationErrorHandler, UsuarioController.create);
usuarioRouter.put('/:id', fullUpdateUsuarioValidation, validationErrorHandler, UsuarioController.update);
usuarioRouter.patch('/:id', partialUpdateUsuarioValidation, validationErrorHandler, UsuarioController.update);

export default usuarioRouter;