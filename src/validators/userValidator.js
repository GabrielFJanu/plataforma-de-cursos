import { body, param, checkExact } from 'express-validator';
import mongoose from 'mongoose';

export const validateCreateUser = checkExact([
    body('username')
        .isString().withMessage('O username deve ser um texto')
        .trim()
        .notEmpty().withMessage('O username nÃ£o deve ser vazio')
        .isLength({ min: 3, max: 30 }).withMessage('O username deve ter entre 3 e 30 caracteres'),

    body('password')
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha nÃ£o deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres'),

    body('role')
        .isString().withMessage('O papel do usuÃ¡rio deve ser um texto')
        .trim()
        .notEmpty().withMessage('O papel do usuÃ¡rio nÃ£o deve ser vazio')
        .isIn(['user', 'admin']).withMessage('O papel do usuÃ¡rio deve ser user ou admin')
]);

export const validateGetUserById = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido')
]);

export const validateReplaceUser = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido'),

    body('username')
        .isString().withMessage('O username deve ser um texto')
        .trim()
        .notEmpty().withMessage('O username nÃ£o deve ser vazio')
        .isLength({ min: 3, max: 30 }).withMessage('O username deve ter entre 3 e 30 caracteres'),

    body('password')
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha nÃ£o deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres'),

    body('role')
        .isString().withMessage('O papel do usuÃ¡rio deve ser um texto')
        .trim()
        .notEmpty().withMessage('O papel do usuÃ¡rio nÃ£o deve ser vazio')
        .isIn(['user', 'admin']).withMessage('O papel do usuÃ¡rio deve ser user ou admin')
]);

export const validateUpdateUser = checkExact([
    param('id')
        .trim()
        .notEmpty().withMessage('O ID nÃ£o deve ser vazio')
        .custom(id => mongoose.Types.ObjectId.isValid(id)).withMessage('O ID deve ser um ObjectId vÃ¡lido'),

    body('username')
        .optional()
        .isString().withMessage('O username deve ser um texto')
        .trim()
        .notEmpty().withMessage('O username nÃ£o deve ser vazio')
        .isLength({ min: 3, max: 30 }).withMessage('O username deve ter entre 3 e 30 caracteres'),

    body('password')
        .optional()
        .isString().withMessage('A senha deve ser um texto')
        .notEmpty().withMessage('A senha nÃ£o deve ser vazia')
        .isLength({ min: 8, max: 72 }).withMessage('A senha deve ter entre 8 e 72 caracteres'),

    body('role')
        .optional()
        .isString().withMessage('O papel do usuÃ¡rio deve ser um texto')
        .trim()
        .notEmpty().withMessage('O papel do usuÃ¡rio nÃ£o deve ser vazio')
        .isIn(['user', 'admin']).withMessage('O papel do usuÃ¡rio deve ser user ou admin')
]);

export const validateDeleteUser = validateGetUserById;

export const validateGetCoursesByCreator = validateGetUserById;
