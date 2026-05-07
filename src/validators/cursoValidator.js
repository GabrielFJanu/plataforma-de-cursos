import { body, param } from 'express-validator';

export const cursoGetByIdValidation = [
    param('id')
    .trim()
    .notEmpty().withMessage('O ID é obrigatório')
    .isUUID().withMessage('O ID deve ser um UUID válido')
]

export const cursoCreateValidation = [
    body('titulo')
    .trim()
    .notEmpty().withMessage('O título é obrigatório')
    .isString().withMessage('O título deve ser um texto'),

    body('descricao')
    .trim()
    .isString().withMessage('A descrição deve ser um texto'),

    body('area_conhecimento')
    .trim()
    .notEmpty().withMessage('A área do conhecimento é obrigatória'),

    body('url')
    .trim()
    .notEmpty().withMessage('O endereço URL é obrigatório')
    .isURL().withMessage('O endereço URL deve ser válido'),

    body('id_criador')
    .trim()
    .notEmpty().withMessage('O ID do usuário criador é obrigatório')
    .isUUID().withMessage('O ID do usuário criador deve ser um UUID válido')
]