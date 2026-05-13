import { UserResponseDto } from "../dtos/userDto.js";
import CourseRepository from "../repositories/CourseRepository.js";
import UserRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";

class UserService {

    static async create(createUserData) {
        const userWithSameEmail = await UserRepository.findByEmail(createUserData.email);

        if (userWithSameEmail) {
            throw createHttpError('Esse email já foi cadastrado no sistema', 409);
        }

        const userFromDb = await UserRepository.create(createUserData);

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    static async getAll() {
        const usersFromDb = await UserRepository.findAll();
        const usersDto = usersFromDb.map( userFromDb => new UserResponseDto(userFromDb));
        return usersDto;
    }

    static async getById(id) {
        const userFromDb = await UserRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    static async replace(id, replaceUserData) {
        const userFromDb = await UserRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const userWithSameEmail = await UserRepository.findByEmail(replaceUserData.email);

        if (userWithSameEmail && userWithSameEmail.id !== id) {
            throw createHttpError('Esse email já foi cadastrado no sistema', 409);
        }

        const replacedUserFromDb = await UserRepository.replace(id, replaceUserData);

        const replacedUserDto = new UserResponseDto(replacedUserFromDb);
        return replacedUserDto;
    }

    static async update(id, updateUserData) {
        if (Object.keys(updateUserData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const userFromDb = await UserRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        if (updateUserData.email !== undefined) {
            const userWithSameEmail = await UserRepository.findByEmail(updateUserData.email);

            if (userWithSameEmail && userWithSameEmail.id !== id) {
                throw createHttpError('Esse email já foi cadastrado no sistema', 409);
            }
        }

        const updatedUserFromDb = await UserRepository.update(id, updateUserData);

        const updatedUserDto = new UserResponseDto(updatedUserFromDb);
        return updatedUserDto;
    }

    static async delete(id) {
        const userFromDb = await UserRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const coursesCreatedByUser = await CourseRepository.findByCreatorId(userFromDb.id);

        for (const courseCreatedByUser of coursesCreatedByUser) {
            await CourseRepository.delete(courseCreatedByUser.id);
        }

        await UserRepository.delete(id);
    }
}

export default UserService;