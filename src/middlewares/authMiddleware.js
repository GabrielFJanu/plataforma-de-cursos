import jwt from 'jsonwebtoken';

import userRepository from '../repositories/UserRepository.js';
import { createHttpError } from '../utils/createHttpError.js';

const JWT_SECRET = process.env.JWT_SECRET;

export function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        const error = createHttpError('Token não fornecido', 401);
        return next(error);
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        const error = createHttpError('Erro no formato do token', 401);
        return next(error);
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        const error = createHttpError('Token mal formatado', 401);
        return next(error);
    }

    jwt.verify(token, JWT_SECRET, async (jwtError, decoded) => {
        if (jwtError) {
            const error = createHttpError('Token inválido ou expirado', 401);
            return next(error);
        }

        try {
            const userFromDb = await userRepository.findById(decoded._id);

            if (!userFromDb) {
                const error = createHttpError('Usuário do token não existe mais', 401);
                return next(error);
            }

            req.user = {
                _id: userFromDb._id.toString(),
                role: userFromDb.role
            };

            next();
        }
        catch (error) {
            next(error);
        }
    });
}
