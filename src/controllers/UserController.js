import userService from "../services/UserService.js";
import courseService from "../services/CourseService.js";

class UserController {

    async create(req, res, next) {
        try {
            const createUserData = req.body;

            const newUserDto = await userService.create(createUserData);

            res.status(201).json(newUserDto);
        }
        catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const usersDto = await userService.getAll();

            res.status(200).json(usersDto);
        }
        catch (error) {
            next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const userDto = await userService.getById(id);

            res.status(200).json(userDto)
        }
        catch (error) {
            next(error);
        }
    }

    async getCoursesByCreatorId(req, res, next) {
        try {
            const creatorId = req.params.id;

            const coursesDto = await courseService.getByCreatorId(creatorId);

            res.status(200).json(coursesDto);
        }
        catch (error) {
            next(error);
        }
    }

    async replace(req, res, next) {
        try {
            const id = req.params.id;
            const replaceUserData = req.body;

            const userDto = await userService.replace(id, replaceUserData);

            res.status(200).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateUserData = req.body;

            const userDto = await userService.update(id, updateUserData);

            res.status(200).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;

            await userService.delete(id);

            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}

export default new UserController();