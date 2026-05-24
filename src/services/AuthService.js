import UserRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    static async login(email, password) {
        const userFromDb = await UserRepository.findByEmail(email);

        if (!userFromDb) {
            throw createHttpError('Credenciais inválidas', 401);
        }

        if (userFromDb.password !== password) {
            throw createHttpError('Credenciais inválidas', 401);
        }

        const payload = {
            id: userFromDb.id
        }

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        return token
    }
}

export default AuthService;