import { createHttpError } from "../utils/createHttpError.js";
import courseRepository from "../repositories/CourseRepository.js";

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

export async function authorizeCourseCreatorOrAdmin(req, res, next) {
    try {
        const isAdmin = req.user.role === 'admin';
        if (isAdmin) {
            return next();
        }

        const courseId = req.params.id;
        const courseFromDb = await courseRepository.findById(courseId);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        if (courseFromDb.creatorId.toString() !== req.user._id) {
            throw createHttpError('Acesso negado', 403);
        }

        next();
    }
    catch (error) {
        return next(error);
    }
}