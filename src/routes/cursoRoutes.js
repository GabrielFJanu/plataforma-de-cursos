import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { createCursoValidation } from "../validators/cursoValidator.js";
import { handleValidationErrors } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', CursoController.getById);
cursoRouter.post('/',createCursoValidation, handleValidationErrors, CursoController.create)

export default cursoRouter;