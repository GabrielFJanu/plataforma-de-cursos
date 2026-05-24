import { validationResult } from 'express-validator';
import { createHttpError } from '../utils/createHttpError.js';

const handleValidationError = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const error = createHttpError(
            'Erro de validação',
            400,
            validationErrors.array().map(error => ({
                field: error.path,
                message: error.msg
            }))
        );

        return next(error);
    }

    next();
};

export default handleValidationError;