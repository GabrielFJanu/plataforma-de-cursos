import { body, param, checkExact } from 'express-validator';

export const getCursoByIdValidation = [
    param('id')
        .trim()
        .notEmpty().withMessage('O ID é obrigatório')
        .isUUID().withMessage('O ID deve ser um UUID válido')
];

const cursoRequiredFieldsValidation = [
    body('titulo')
        .trim()
        .notEmpty().withMessage('O título é obrigatório')
        .isString().withMessage('O título deve ser um texto'),

    body('descricao')
        .optional()
        .trim()
        .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
        .trim()
        .notEmpty().withMessage('A área do conhecimento é obrigatória')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .trim()
        .notEmpty().withMessage('O endereço URL é obrigatório')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
        .trim()
        .notEmpty().withMessage('O ID do usuário criador é obrigatório')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
];

export const createCursoValidation = checkExact(cursoRequiredFieldsValidation);

export const fullUpdateCursoValidation = checkExact([
    ...getCursoByIdValidation,
    ...cursoRequiredFieldsValidation
]);

export const partialUpdateCursoValidation = checkExact([
    ...getCursoByIdValidation,

    body('titulo')
        .optional()
        .trim()
        .notEmpty().withMessage('O título não pode ser vazio')
        .isString().withMessage('O título deve ser um texto'),

    body('descricao')
        .optional()
        .trim()
        .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
        .optional()
        .trim()
        .notEmpty().withMessage('A área do conhecimento não pode ser vazia')
        .isString().withMessage('A área do conhecimento deve ser um texto'),

    body('url')
        .optional()
        .trim()
        .notEmpty().withMessage('O endereço URL não pode ser vazio')
        .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
        .optional()
        .trim()
        .notEmpty().withMessage('O ID do usuário criador não pode ser vazio')
        .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]);
