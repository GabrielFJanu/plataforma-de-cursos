import { Router } from "express";
import UserController from "../controllers/UserController.js"
import { validateGetUserById, validateCreateUser, validateReplaceUser, validateUpdateUser, validateDeleteUser, validateGetCoursesByCreatorId } from "../validators/userValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const userRouter = Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', validateGetUserById, validationErrorHandler, UserController.getById);
userRouter.post('/', validateCreateUser, validationErrorHandler, UserController.create);
userRouter.put('/:id', validateReplaceUser, validationErrorHandler, UserController.update);
userRouter.patch('/:id', validateUpdateUser, validationErrorHandler, UserController.update);
userRouter.delete('/:id', validateCreateUser, validationErrorHandler, UserController.delete);
userRouter.get('/:id/courses', validateGetCoursesByCreatorId, validationErrorHandler, UserController.getCoursesByCreatorId);

export default userRouter;