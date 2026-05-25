import UserRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import jwt from "jsonwebtoken";
import UserService from "./UserService.js";

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    static async login(loginData) {
        const userFromDb = await UserRepository.findByEmail(loginData.email);

        if (!userFromDb) {
            throw createHttpError('Credenciais inválidas', 401);
        }

        if (userFromDb.password !== loginData.password) {
            throw createHttpError('Credenciais inválidas', 401);
        }

        const payload = {
            id: userFromDb.id,
            role: userFromDb.role
        }

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        return token
    }

    static async register(registerData) {
        const registerDataWithRole = {
            ...registerData,
            role: "user"
        }
        return UserService.create(registerDataWithRole);
    }
}

export default AuthService;