import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { validateGetCursoById, validateCreateCurso } from "../validators/cursoValidator.js";
import { handleValidationErrors } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', validateGetCursoById, handleValidationErrors, CursoController.getById);
cursoRouter.post('/', validateCreateCurso, handleValidationErrors, CursoController.create);

export default cursoRouter;