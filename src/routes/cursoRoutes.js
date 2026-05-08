import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { getCursoByIdValidation, createCursoValidation } from "../validators/cursoValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', getCursoByIdValidation, validationErrorHandler, CursoController.getById);
cursoRouter.post('/', createCursoValidation, validationErrorHandler, CursoController.create);

export default cursoRouter;