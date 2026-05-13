import { Router } from "express";
import CourseController from "../controllers/CourseController.js";
import { findCourseByIdValidation, createCourseValidation, fullUpdateCourseValidation, partialUpdateCourseValidation, deleteCourseValidation } from "../validators/courseValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const courseRouter = Router();

courseRouter.get('/', CourseController.findAll);
courseRouter.get('/:id', findCourseByIdValidation, validationErrorHandler, CourseController.findById);
courseRouter.post('/', createCourseValidation, validationErrorHandler, CourseController.create);
courseRouter.put('/:id', fullUpdateCourseValidation, validationErrorHandler, CourseController.update);
courseRouter.patch('/:id', partialUpdateCourseValidation, validationErrorHandler, CourseController.update);
courseRouter.delete('/:id', deleteCourseValidation, validationErrorHandler, CourseController.delete);

export default courseRouter;