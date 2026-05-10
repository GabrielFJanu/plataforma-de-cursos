import { body, param, checkExact } from 'express-validator';

export const getCursoByIdValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const createCursoValidation = checkExact([
    body('titulo')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('descricao')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const fullUpdateCursoValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('titulo')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('descricao')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const partialUpdateCursoValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('titulo')
        .optional()
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('descricao')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
        .optional()
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .optional()
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
        .optional()
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const deleteCursoValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
])