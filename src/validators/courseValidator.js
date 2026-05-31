import { body, param, checkExact } from 'express-validator';
import mongoose from 'mongoose';

export const validateCreateCourse = checkExact([
    body('title')
        .isString().withMessage('O tÃ­tulo deve ser um texto')
        .trim()
        .notEmpty().withMessage('O tÃ­tulo nÃ£o deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descriÃ§Ã£o deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descriÃ§Ã£o nÃ£o deve ser vazia'),

    body('knowledgeArea')
        .isString().withMessage('A Ã¡rea do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A Ã¡rea do conhecimento nÃ£o deve ser vazia'),

    body('url')
        .isString().withMessage('O endereÃ§o URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereÃ§o URL nÃ£o deve ser vazio')
        .isURL().withMessage('O endereÃ§o URL deve ser vÃ¡lido')
]);

export const validateGetCourseById = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido')
]);

export const validateReplaceCourse = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido'),

    body('title')
        .isString().withMessage('O tÃ­tulo deve ser um texto')
        .trim()
        .notEmpty().withMessage('O tÃ­tulo nÃ£o deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descriÃ§Ã£o deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descriÃ§Ã£o nÃ£o deve ser vazia'),

    body('knowledgeArea')
        .isString().withMessage('A Ã¡rea do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A Ã¡rea do conhecimento nÃ£o deve ser vazia'),

    body('url')
        .isString().withMessage('O endereÃ§o URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereÃ§o URL nÃ£o deve ser vazio')
        .isURL().withMessage('O endereÃ§o URL deve ser vÃ¡lido')
]);

export const validateUpdateCourse = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido'),

    body('title')
        .optional()
        .isString().withMessage('O tÃ­tulo deve ser um texto')
        .trim()
        .notEmpty().withMessage('O tÃ­tulo nÃ£o deve ser vazio'),

    body('description')
        .optional()
        .isString().withMessage('A descriÃ§Ã£o deve ser um texto')
        .trim()
        .notEmpty().withMessage('A descriÃ§Ã£o nÃ£o deve ser vazia'),

    body('knowledgeArea')
        .optional()
        .isString().withMessage('A Ã¡rea do conhecimento deve ser um texto')
        .trim()
        .notEmpty().withMessage('A Ã¡rea do conhecimento nÃ£o deve ser vazia'),

    body('url')
        .optional()
        .isString().withMessage('O endereÃ§o URL deve ser um texto')
        .trim()
        .notEmpty().withMessage('O endereÃ§o URL nÃ£o deve ser vazio')
        .isURL().withMessage('O endereÃ§o URL deve ser vÃ¡lido')
]);

export const validateDeleteCourse = validateGetCourseById;
