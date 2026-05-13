import { Router } from "express";
import CourseController from "../controllers/CourseController.js";
import { validateCreateCourse, validateGetCourseById, validateReplaceCourse, validateUpdateCourse, validateDeleteCourse } from "../validators/courseValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const courseRouter = Router();

courseRouter.get('/', CourseController.getAll);
courseRouter.post('/', validateCreateCourse, validationErrorHandler, CourseController.create);
courseRouter.get('/:id', validateGetCourseById, validationErrorHandler, CourseController.getById);
courseRouter.put('/:id', validateReplaceCourse, validationErrorHandler, CourseController.update);
courseRouter.patch('/:id', validateUpdateCourse, validationErrorHandler, CourseController.update);
courseRouter.delete('/:id', validateDeleteCourse, validationErrorHandler, CourseController.delete);

export default courseRouter;