import { Router } from "express";
import UserController from "../controllers/UserController.js"
import { getUserByIdValidation, createUserValidation, fullUpdateUserValidation, partialUpdateUserValidation, deleteUserValidation } from "../validators/userValidator.js";
import { validationErrorHandler } from "../middlewares/validatorMiddleware.js";

const userRouter = Router();

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', getUserByIdValidation, validationErrorHandler, UserController.getById);
userRouter.post('/', createUserValidation, validationErrorHandler, UserController.create);
userRouter.put('/:id', fullUpdateUserValidation, validationErrorHandler, UserController.update);
userRouter.patch('/:id', partialUpdateUserValidation, validationErrorHandler, UserController.update);
userRouter.delete('/:id', deleteUserValidation, validationErrorHandler, UserController.delete);
userRouter.get('/:id/courses', getUserByIdValidation, validationErrorHandler, UserController.getCoursesByUserId);

export default userRouter;