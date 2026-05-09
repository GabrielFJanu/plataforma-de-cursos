import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { getCursoByIdValidation, createCursoValidation, fullUpdateCursoValidation, partialUpdateCursoValidation } from "../validators/cursoValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', getCursoByIdValidation, validationErrorHandler, CursoController.getById);
cursoRouter.post('/', createCursoValidation, validationErrorHandler, CursoController.create);
cursoRouter.put('/:id', fullUpdateCursoValidation, validationErrorHandler, CursoController.update);
cursoRouter.patch('/:id', partialUpdateCursoValidation, validationErrorHandler, CursoController.update);

export default cursoRouter;