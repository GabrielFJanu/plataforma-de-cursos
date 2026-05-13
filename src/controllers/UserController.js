import UserService from "../services/UserService.js";
import CourseService from "../services/CourseService.js";

class UserController {

    static async create(req, res, next) {
        try {
            const createUserData = req.body;

            const newUserDto = await UserService.create(createUserData);

            res.status(201).json(newUserDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async getAll(req, res, next) {
        try {
            const usersDto = await UserService.getAll();

            res.status(200).json(usersDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async getById(req, res, next) {
        try {
            const id = req.params.id;
        
            const userDto = await UserService.getById(id);

            res.status(200).json(userDto)
        }
        catch (error) {
            next(error);
        }
    }

    static async getCoursesByCreatorId(req, res, next) {
        try {
            const creatorId = req.params.id;

            const coursesDto = await CourseService.getByCreatorId(creatorId);

            res.status(200).json(coursesDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async replace(req, res, next) {
        try {
            const id = req.params.id;
            const replaceUserData = req.body;

            const userDto = await UserService.replace(id, replaceUserData);

            res.status(200).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async update(req, res, next) {
        try {
            const id = req.params.id;
            const updateUserData = req.body;

            const userDto = await UserService.update(id, updateUserData);

            res.status(200).json(userDto);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const id = req.params.id;

            await UserService.delete(id);

            res.status(204).send();
        }
        catch (error) {
            next(error);
        }
    }
}

export default UserController