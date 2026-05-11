import { UserResponseDto } from "../dtos/userDto.js";
import UserRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";

class UserService {
    static async getAll() {
        const usersFromDb = await UserRepository.getAll();
        const usersDto = usersFromDb.map( userFromDb => new UserResponseDto(userFromDb));
        return usersDto;
    }

    static async getById(id) {
        const userFromDb = await UserRepository.getById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    static async create(createUserData) {
        const userFromDb = await UserRepository.create(createUserData);

        const userDto = new UserResponseDto(userFromDb);
        return userDto;
    }

    static async update(id, updateUserData) {
        if (Object.keys(updateUserData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const userFromDb = await UserRepository.getById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const updatedUserFromDb = await UserRepository.update(id, updateUserData);

        const updatedUserDto = new UserResponseDto(updatedUserFromDb);
        return updatedUserDto;
    }

    static async delete(id) {
        const userFromDb = await UserRepository.getById(id);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        await UserRepository.delete(id);
    }
}

export default UserService;