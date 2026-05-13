import { Router } from "express";
import CourseController from "../controllers/CourseController.js";
import { getCourseByIdValidation, createCourseValidation, fullUpdateCourseValidation, partialUpdateCourseValidation, deleteCourseValidation } from "../validators/courseValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const courseRouter = Router();

courseRouter.get('/', CourseController.getAll);
courseRouter.get('/:id', getCourseByIdValidation, validationErrorHandler, CourseController.getById);
courseRouter.post('/', createCourseValidation, validationErrorHandler, CourseController.create);
courseRouter.put('/:id', fullUpdateCourseValidation, validationErrorHandler, CourseController.update);
courseRouter.patch('/:id', partialUpdateCourseValidation, validationErrorHandler, CourseController.update);
courseRouter.delete('/:id', deleteCourseValidation, validationErrorHandler, CourseController.delete);

export default courseRouter;