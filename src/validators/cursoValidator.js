import { body } from 'express-validator';

export const createCursoValidation = [
    body('titulo')
    .trim()
    .notEmpty().withMessage('O título é obrigatório')
    .isString().withMessage('O título dever ser um texto'),

    body('descricao')
    .trim(),

    body('area_conhecimento')
    .trim()
    .notEmpty().withMessage('A área do conhecimento é obrigatória'),

    body('url')
    .trim()
    .notEmpty().withMessage('O endereço URL é obrigatório')
    .isURL().withMessage('O endereço URL precisa ser válido'),

    body('id_dono')
    .trim()
    .notEmpty().withMessage('O id do usuário dono é obrigatório')
    .isUUID().withMessage('O id do usuário dono dever ser um UUID válido')
]