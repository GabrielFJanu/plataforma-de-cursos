import { body, param, checkExact } from 'express-validator';

export const getUsuarioByIdValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID é obrigatório')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const createUsuarioValidation = checkExact([
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome é obrigatório')
        .isString().withMessage('O nome deve ser um texto'),

    body('sobrenome')
        .optional()
        .trim()
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .notEmpty().withMessage('O email é obrigatório')
        .isEmail().withMessage('O email deve ser válido'),
]);
