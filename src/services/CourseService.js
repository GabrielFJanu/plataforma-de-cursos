import { CourseResponseDto } from "../dtos/courseDto.js";
import courseRepository from "../repositories/CourseRepository.js";
import userRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import { extractYoutubeId } from "../utils/extractYoutubeId.js";

class CourseService {

    async create(createCourseData, creator) {

        const youtubeId = extractYoutubeId(createCourseData.url);

        if (!youtubeId) {
            throw createHttpError('URL do YouTube invalida', 400);
        }

        const courseToCreate = {
            ...createCourseData,
            youtubeId,
            creator
        };

        const courseFromDb = await courseRepository.create(courseToCreate);

        const courseDto = new CourseResponseDto(courseFromDb);
        return courseDto;
    }

    async getAll() {
        const coursesFromDb = await courseRepository.findAll();

        const coursesDto = coursesFromDb.map(courseFromDb => new CourseResponseDto(courseFromDb));
        return coursesDto
    }

    async getById(id) {
        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso nao encontrado', 404);
        }

        const courseDto = new CourseResponseDto(courseFromDb);
        return courseDto;
    }

    async getByCreator(creator) {
        const userFromDb = await userRepository.findById(creator);

        if (!userFromDb) {
            throw createHttpError('Usuario nao encontrado', 404);
        }

        const coursesFromDb = await courseRepository.findByCreator(creator);

        const coursesDto = coursesFromDb.map(course => new CourseResponseDto(course));
        return coursesDto;
    }

    async replace(id, replaceCourseData) {
        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso nao encontrado', 404);
        }

        const youtubeId = extractYoutubeId(replaceCourseData.url);

        if (!youtubeId) {
            throw createHttpError('URL do YouTube invalida', 400);
        }

        const courseToReplace = {
            ...replaceCourseData,
            youtubeId,
            creator: courseFromDb.creator._id,
            createdAt: courseFromDb.createdAt
        };

        const updatedCourseFromDb = await courseRepository.replace(id, courseToReplace);

        const updatedCourseDto = new CourseResponseDto(updatedCourseFromDb);
        return updatedCourseDto;
    }

    async update(id, updateCourseData) {
        if (Object.keys(updateCourseData).length === 0) {
            throw createHttpError('Nenhum dado para atualizacao foi enviado', 400);
        }

        const courseToUpdate = { ...updateCourseData };

        if (updateCourseData.url !== undefined) {
            const youtubeId = extractYoutubeId(updateCourseData.url);

            if (!youtubeId) {
                throw createHttpError('URL do YouTube invalida', 400);
            }

            courseToUpdate.youtubeId = youtubeId;
        }

        const updatedCourseFromDb = await courseRepository.update(id, courseToUpdate);

        if (!updatedCourseFromDb) {
            throw createHttpError('Curso nao encontrado', 404);
        }

        const updatedCourseDto = new CourseResponseDto(updatedCourseFromDb);
        return updatedCourseDto;
    }

    async delete(id) {
        const deletedCourseFromDb = await courseRepository.delete(id);

        if (!deletedCourseFromDb) {
            throw createHttpError('Curso nao encontrado', 404);
        }
    }
}

export default new CourseService();