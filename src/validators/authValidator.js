import { body, checkExact } from 'express-validator';

export const validateLogin = checkExact([
    body('email')
        .isString().withMessage('O email deve ser um texto')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido'),

    body('password')
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha não deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres')
]);