import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { getCursoByIdValidation, createCursoValidation, fullUpdateCursoValidation, partialUpdateCursoValidation, deleteCursoValidation } from "../validators/cursoValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', getCursoByIdValidation, validationErrorHandler, CursoController.getById);
cursoRouter.post('/', createCursoValidation, validationErrorHandler, CursoController.create);
cursoRouter.put('/:id', fullUpdateCursoValidation, validationErrorHandler, CursoController.update);
cursoRouter.patch('/:id', partialUpdateCursoValidation, validationErrorHandler, CursoController.update);
cursoRouter.delete('/:id', deleteCursoValidation, validationErrorHandler, CursoController.delete);

export default cursoRouter;