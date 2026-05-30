import { UserResponseDto } from "../dtos/UserDto.js";
import courseRepository from "../repositories/CourseRepository.js";
import userRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import bcrypt from "bcrypt";

class UserService {

    async create(createUserData) {
        const userWithSameEmail = await userRepository.findByEmail(createUserData.email);

        if (userWithSameEmail) {
            throw createHttpError('Esse email já foi cadastrado no sistema', 409);
        }

        const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;
        const hashedPassword = await bcrypt.hash(createUserData.password, saltRounds);
        const userToCreate = { ...createUserData, password: hashedPassword};

        const userFromDb = await userRepository.create(userToCreate);

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    async getAll() {
        const usersFromDb = await userRepository.findAll();
        const usersDto = usersFromDb.map( userFromDb => new UserResponseDto(userFromDb));
        return usersDto;
    }

    async getById(id) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    async replace(id, replaceUserData) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const userWithSameEmail = await userRepository.findByEmail(replaceUserData.email);

        if (userWithSameEmail && userWithSameEmail.id !== id) {
            throw createHttpError('Esse email já foi cadastrado no sistema', 409);
        }

        const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;
        const hashedPassword = await bcrypt.hash(replaceUserData.password, saltRounds);
        const userToReplace = { ...replaceUserData, password: hashedPassword};

        const replacedUserFromDb = await userRepository.replace(id, userToReplace);

        const replacedUserDto = new UserResponseDto(replacedUserFromDb);
        return replacedUserDto;
    }

    async update(id, updateUserData) {
        if (Object.keys(updateUserData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        if (updateUserData.email !== undefined) {
            const userWithSameEmail = await userRepository.findByEmail(updateUserData.email);

            if (userWithSameEmail && userWithSameEmail.id !== id) {
                throw createHttpError('Esse email já foi cadastrado no sistema', 409);
            }
        }

        const userToUpdate = { ...updateUserData };
        if (updateUserData.password !== undefined) {
            const saltRounds = process.env.BCRYPT_SALT_ROUNDS || 10;
            const hashedPassword = await bcrypt.hash(updateUserData.password, saltRounds);
            userToUpdate.password = hashedPassword;
        }

        const updatedUserFromDb = await userRepository.update(id, userToUpdate);

        const updatedUserDto = new UserResponseDto(updatedUserFromDb);
        return updatedUserDto;
    }

    async delete(id) {
        const userFromDb = await userRepository.findById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const coursesCreatedByUser = await courseRepository.findByCreatorId(userFromDb.id);

        for (const courseCreatedByUser of coursesCreatedByUser) {
            await courseRepository.delete(courseCreatedByUser.id);
        }

        await userRepository.delete(id);
    }
}

export default new UserService();