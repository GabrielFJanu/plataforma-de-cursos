import { Router } from "express";
import UserController from "../controllers/UserController.js"
import { validateCreateUser, validateGetUserById, validateReplaceUser, validateUpdateUser, validateDeleteUser, validateGetCoursesByCreatorId } from "../validators/userValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const userRouter = Router();

userRouter.get('/', UserController.getAll);
userRouter.post('/', validateCreateUser, validationErrorHandler, UserController.create);
userRouter.get('/:id', validateGetUserById, validationErrorHandler, UserController.getById);
userRouter.put('/:id', validateReplaceUser, validationErrorHandler, UserController.replace);
userRouter.patch('/:id', validateUpdateUser, validationErrorHandler, UserController.update);
userRouter.delete('/:id', validateDeleteUser, validationErrorHandler, UserController.delete);
userRouter.get('/:id/courses', validateGetCoursesByCreatorId, validationErrorHandler, UserController.getCoursesByCreatorId);

export default userRouter;