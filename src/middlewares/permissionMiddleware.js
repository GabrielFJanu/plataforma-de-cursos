import { createHttpError } from "../utils/createHttpError.js";

export function authorize(...allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user.role;

        const hasPermission = allowedRoles.includes(userRole);
        if (!hasPermission) {
            const error = createHttpError('Acesso negado', 403);
            return next(error);
        }

        next();
    };
}