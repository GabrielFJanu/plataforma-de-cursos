import bcrypt from "bcrypt";

import { UserResponseDto } from "../dtos/userDto.js";
import courseRepository from "../repositories/CourseRepository.js";
import userRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";

class UserService {

    async create(createUserData) {
        const userWithSameUsername = await userRepository.findByUsername(createUserData.username);

        if (userWithSameUsername) {
            throw createHttpError('Esse username ja foi cadastrado no sistema', 409);
        }

        const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
        const hashedPassword = await bcrypt.hash(createUserData.password, saltRounds);
        const userToCreate = { ...createUserData, password: hashedPassword };

        const userFromDb = await userRepository.create(userToCreate);

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    async getAll() {
        const usersFromDb = await userRepository.findAll();
        const usersDto = usersFromDb.map(userFromDb => new UserResponseDto(userFromDb));
        return usersDto;
    }

    async getById(id) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuario nao encontrado', 404);
        }

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    async replace(id, replaceUserData) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuario nao encontrado', 404);
        }

        const userWithSameUsername = await userRepository.findByUsername(replaceUserData.username);

        if (userWithSameUsername && userWithSameUsername._id.toString() !== id) {
            throw createHttpError('Esse username ja foi cadastrado no sistema', 409);
        }

        const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
        const hashedPassword = await bcrypt.hash(replaceUserData.password, saltRounds);
        const userToReplace = {
            ...replaceUserData,
            password: hashedPassword,
            createdAt: userFromDb.createdAt
        };

        const replacedUserFromDb = await userRepository.replace(id, userToReplace);

        const replacedUserDto = new UserResponseDto(replacedUserFromDb);
        return replacedUserDto;
    }

    async update(id, updateUserData) {
        if (Object.keys(updateUserData).length === 0) {
            throw createHttpError('Nenhum dado para atualizacao foi enviado', 400);
        }

        if (updateUserData.username !== undefined) {
            const userWithSameUsername = await userRepository.findByUsername(updateUserData.username);

            if (userWithSameUsername && userWithSameUsername._id.toString() !== id) {
                throw createHttpError('Esse username ja foi cadastrado no sistema', 409);
            }
        }

        const userToUpdate = { ...updateUserData };
        if (updateUserData.password !== undefined) {
            const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS) || 10;
            const hashedPassword = await bcrypt.hash(updateUserData.password, saltRounds);
            userToUpdate.password = hashedPassword;
        }

        const updatedUserFromDb = await userRepository.update(id, userToUpdate);

        if (!updatedUserFromDb) {
            throw createHttpError('Usuario nao encontrado', 404);
        }

        const updatedUserDto = new UserResponseDto(updatedUserFromDb);
        return updatedUserDto;
    }

    async delete(id) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuario nao encontrado', 404);
        }

        const coursesCreatedByUser = await courseRepository.findByCreator(userFromDb._id.toString());

        for (const courseCreatedByUser of coursesCreatedByUser) {
            await courseRepository.delete(courseCreatedByUser._id.toString());
        }

        await userRepository.delete(id);
    }
}

export default new UserService();