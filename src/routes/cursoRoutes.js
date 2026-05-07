import { Router } from "express";
import CursoController from "../controllers/CursoController.js";
import { cursoGetByIdValidation, cursoCreateValidation } from "../validators/cursoValidator.js";
import { handleValidationErrors } from "../middlewares/validatorMiddleware.js";

const cursoRouter = Router();

cursoRouter.get('/', CursoController.getAll);
cursoRouter.get('/:id', cursoGetByIdValidation, handleValidationErrors, CursoController.getById);
cursoRouter.post('/', cursoCreateValidation, handleValidationErrors, CursoController.create)

export default cursoRouter;