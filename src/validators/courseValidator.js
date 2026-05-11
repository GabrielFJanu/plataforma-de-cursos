import { body, param, checkExact } from 'express-validator';

export const getCourseByIdValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const createCourseValidation = checkExact([
    body('title')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('description')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('knowledgeArea')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const fullUpdateCourseValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('title')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('description')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('knowledgeArea')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const partialUpdateCourseValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('title')
        .optional()
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('description')
        .optional()
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia')
        .isString().withMessage('A descrição deve ser um texto'),

    body('knowledgeArea')
        .optional()
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .optional()
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .optional()
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const deleteCourseValidation = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
])