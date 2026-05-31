import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import userRepository from '../repositories/UserRepository.js';
import { createHttpError } from '../utils/createHttpError.js';
import userService from './UserService.js';

const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    async login(loginData) {
        const userFromDb = await userRepository.findByUsername(loginData.username);

        if (!userFromDb) {
            throw createHttpError('Credenciais invÃ¡lidas', 401);
        }

        const isValidPassword = await bcrypt.compare(loginData.password, userFromDb.password);
        if (!isValidPassword) {
            throw createHttpError('Credenciais invÃ¡lidas', 401);
        }

        const payload = {
            _id: userFromDb._id.toString(),
            role: userFromDb.role
        }

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        return token
    }

    async register(registerData) {
        const registerDataWithRole = {
            ...registerData,
            role: "user"
        }
        return userService.create(registerDataWithRole);
    }
}

export default new AuthService();
