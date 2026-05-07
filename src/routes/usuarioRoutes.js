import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { validateGetUsuarioById, validateCreateUsuario } from "../validators/usuarioValidator.js";
import { handleValidationErrors } from "../middlewares/validatorMiddleware.js";

const usuarioRouter = Router();

usuarioRouter.get('/', UsuarioController.getAll);
usuarioRouter.get('/:id', validateGetUsuarioById, handleValidationErrors, UsuarioController.getById);
usuarioRouter.post('/', validateCreateUsuario, handleValidationErrors, UsuarioController.create);

export default usuarioRouter;