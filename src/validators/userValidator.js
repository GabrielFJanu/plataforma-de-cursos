import { body, param, checkExact } from 'express-validator';

export const findUserByIdValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const createUserValidation = checkExact([
    body('firstname')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('lastname')
        .optional()
        .trim()
        .notEmpty().withMessage('O sobrenome não deve ser vazio')
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido')
]);

export const fullUpdateUserValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('firstname')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('lastname')
        .optional()
        .trim()
        .notEmpty().withMessage('O sobrenome não pode ser vazio')
        .isString().withMessage('O sobrenome deve ser um texto'),

    body('email')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido')
])

export const partialUpdateUserValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('firstname')
        .trim()
        .optional()
        .notEmpty().withMessage('O nome não deve ser vazio')
        .isString().withMessage('O nome deve ser um texto'),

    body('lastname')
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

export const deleteUserValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);
