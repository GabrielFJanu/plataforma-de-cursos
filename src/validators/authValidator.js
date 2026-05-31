import { body, checkExact } from 'express-validator';

export const validateLogin = checkExact([
    body('username')
        .isString().withMessage('O username deve ser um texto')
        .trim()
        .notEmpty().withMessage('O username não deve ser vazio')
        .isLength({ min: 3, max: 30 }).withMessage('O username deve ter entre 3 e 30 caracteres'),

    body('password')
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha não deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres')
]);

export const validateRegister = checkExact([
    body('username')
        .isString().withMessage('O username deve ser um texto')
        .trim()
        .notEmpty().withMessage('O username não deve ser vazio')
        .isLength({ min: 3, max: 30 }).withMessage('O username deve ter entre 3 e 30 caracteres'),

    body('password')
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha não deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres')
]);
