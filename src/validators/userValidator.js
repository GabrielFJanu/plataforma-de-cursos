import { body, param, checkExact } from 'express-validator';

export const validateCreateUser = checkExact([
    body('firstname')
        .isString().withMessage('O nome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio'),

    body('lastname')
        .optional()
        .isString().withMessage('O sobrenome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O sobrenome não deve ser vazio'),

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

export const validateGetUserById = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const validateReplaceUser = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('firstname')
        .isString().withMessage('O nome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio'),

    body('lastname')
        .optional()
        .isString().withMessage('O sobrenome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O sobrenome não pode ser vazio'),

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

export const validateUpdateUser = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('firstname')
        .optional()
        .isString().withMessage('O nome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O nome não deve ser vazio'),

    body('lastname')
        .optional()
        .isString().withMessage('O sobrenome deve ser um texto')
        .trim()
        .notEmpty().withMessage('O sobrenome não pode ser vazio'),

    body('email')
        .optional()
        .isString().withMessage('O email deve ser um texto')
        .trim()
        .notEmpty().withMessage('O email não deve ser vazio')
        .isEmail().withMessage('O email deve ser válido'),

    body('password')
        .optional()
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha não deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres')
]);

export const validateDeleteUser = validateGetUserById;

export const validateGetCoursesByCreatorId = validateGetUserById;
