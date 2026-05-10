import { body, param, checkExact } from 'express-validator';

export const getUsuarioByIdValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const createUsuarioValidation = checkExact([
    body('nome')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('sobrenome')
        .optional()
        .trim()
        .notEmpty().withMessage('O sobrenome não deve ser vazio')
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido')
]);

export const fullUpdateUsuarioValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('nome')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('sobrenome')
        .optional()
        .trim()
        .notEmpty().withMessage('O sobrenome não pode ser vazio')
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido')
])

export const partialUpdateUsuarioValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('nome')
        .trim()
        .optional()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('sobrenome')
        .optional()
        .trim()
        .notEmpty().withMessage('O sobrenome não pode ser vazio')
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .optional()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido')
])

export const deleteUsuarioValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);
