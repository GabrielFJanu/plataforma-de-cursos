import { CourseResponseDto, CourseWithCreatorResponseDto } from "../dtos/courseDto.js";
import CourseRepository from "../repositories/CourseRepository.js";
import UserRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import { extractYoutubeId } from "../utils/extractYoutubeId.js";

class CourseService {
    static async getAll() {
        const coursesFromDb = await CourseRepository.findAll();

        const coursesDto = coursesFromDb.map(courseFromDb => new CourseResponseDto(courseFromDb));
        return coursesDto
    }

    static async getById(id) {
        const courseFromDb = await CourseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        const courseDto = new CourseResponseDto(courseFromDb);
        return courseDto;
    }

    static async getByCreatorId(creatorId) {
        const userFromDb = await UserRepository.findById(creatorId);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const coursesFromDb = await CourseRepository.findByCreatorId(creatorId);

        const coursesDto = coursesFromDb.map(course => new CourseResponseDto(course));
        return coursesDto;
    }

    static async create(createCourseData) {

        const youtubeId = extractYoutubeId(createCourseData.url);
        
        if (!youtubeId) {
            throw createHttpError('URL do YouTube inválida', 400);
        }

        createCourseData.youtubeId = youtubeId;

        const criador = await UserRepository.findById(createCourseData.creatorId);

        if (!criador) {
            throw createHttpError('Criador não encontrado', 404);
        }

        const courseFromDb = await CourseRepository.create(createCourseData);

        const courseDto = new CourseResponseDto(courseFromDb);
        return courseDto;
    }

    static async update(id, updateCourseData) {
        if (Object.keys(updateCourseData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const courseFromDb = await CourseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        if (updateCourseData.url !== undefined) {
            const youtubeId = extractYoutubeId(updateCourseData.url);
        
            if (!youtubeId) {
                throw createHttpError('URL do YouTube inválida', 400);
            }

            updateCourseData.youtubeId = youtubeId;
        }

        if (updateCourseData.creatorId !== undefined) {
            const criador = await UserRepository.findById(updateCourseData.creatorId);

            if (!criador) {
                throw createHttpError('Criador não encontrado', 404);
            }
        }

        const updatedCourseFromDb = await CourseRepository.update(id, updateCourseData);

        const updatedCourseDto = new CourseResponseDto(updatedCourseFromDb);
        return updatedCourseDto;
    }

    static async delete(id) {
        const courseFromDb = await CourseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        await CourseRepository.delete(id);
    }
}

export default CourseService;