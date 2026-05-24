import { body, param, checkExact } from 'express-validator';

export const validateCreateCourse = checkExact([
    body('title')
        .isString().withMessage('O título deve ser um texto')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descrição deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia'),

    body('knowledgeArea')
        .isString().withMessage('A área do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia'),

    body('url')
        .isString().withMessage('O endereço URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .isString().withMessage('O ID do usuário criador deve ser um texto')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const validateGetCourseById = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido')
]);

export const validateReplaceCourse = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('title')
        .isString().withMessage('O título deve ser um texto')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descrição deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia'),

    body('knowledgeArea')
        .isString().withMessage('A área do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia'),

    body('url')
        .isString().withMessage('O endereço URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .isString().withMessage('O ID do usuário criador deve ser um texto')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const validateUpdateCourse = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID não deve ser vazio')
        .isUUID().withMessage('O ID deve ser um UUID válido'),

    body('title')
        .optional()
        .isString().withMessage('O título deve ser um texto')
        .trim()
        .notEmpty().withMessage('O título não deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descrição deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descrição não deve ser vazia'),

    body('knowledgeArea')
        .optional()
        .isString().withMessage('A área do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A área do conhecimento não deve ser vazia'),

    body('url')
        .optional()
        .isString().withMessage('O endereço URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereço URL não deve ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('creatorId')
        .optional()
        .isString().withMessage('O ID do usuário criador deve ser um texto')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não deve ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);

export const validateDeleteCourse = validateGetCourseById;