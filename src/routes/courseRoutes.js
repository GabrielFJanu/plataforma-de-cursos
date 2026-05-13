import { Router } from "express";
import CourseController from "../controllers/CourseController.js";
import { validateGetCourseById, validateCreateCourse, validateReplaceCourse, validateUpdateCourse, validateDeleteCourse } from "../validators/courseValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const courseRouter = Router();

courseRouter.get('/', CourseController.getAll);
courseRouter.get('/:id', validateGetCourseById, validationErrorHandler, CourseController.getById);
courseRouter.post('/', validateCreateCourse, validationErrorHandler, CourseController.create);
courseRouter.put('/:id', validateReplaceCourse, validationErrorHandler, CourseController.update);
courseRouter.patch('/:id', validateUpdateCourse, validationErrorHandler, CourseController.update);
courseRouter.delete('/:id', validateDeleteCourse, validationErrorHandler, CourseController.delete);

export default courseRouter;