import { CourseResponseDto, CourseWithCreatorResponseDto } from "../dtos/courseDto.js";
import courseRepository from "../repositories/CourseRepository.js";
import userRepository from "../repositories/UserRepository.js";
import { createHttpError } from "../utils/createHttpError.js";
import { extractYoutubeId } from "../utils/extractYoutubeId.js";

class CourseService {

    async create(createCourseData, creatorId) {

        const youtubeId = extractYoutubeId(createCourseData.url);
        
        if (!youtubeId) {
            throw createHttpError('URL do YouTube inválida', 400);
        }

        const courseToCreate = {
            ...createCourseData,
            youtubeId,
            creatorId
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

    async getAllWithCreator() {
        const coursesFromDb = await courseRepository.findAll();

        const creatorIds = [...new Set(coursesFromDb.map(courseFromDb => courseFromDb.creatorId.toString()))];

        const creatorsFromDb = await userRepository.findByIds(creatorIds);

        const coursesWithCreatorFromDb = enrichCoursesWithCreator(coursesFromDb, creatorsFromDb);

        const coursesWithCreatorDto = coursesWithCreatorFromDb.map(courseWithCreatorFromDb => new CourseWithCreatorResponseDto(courseWithCreatorFromDb));
        return coursesWithCreatorDto;
        
        function enrichCoursesWithCreator(courses, creators) {
            const mapCreatorIdToCreator = new Map(creators.map(creator => [creator._id.toString(), creator]));
            const coursesWithCreator = courses.map(course => ({
                ...course,
                creator: mapCreatorIdToCreator.get(course.creatorId.toString()) || null
            }));
            return coursesWithCreator;
        }
    }

    async getById(id) {
        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        const courseDto = new CourseResponseDto(courseFromDb);
        return courseDto;
    }

    async getByCreatorId(creatorId) {
        const userFromDb = await userRepository.findById(creatorId);

        if (!userFromDb) {
            throw createHttpError('Usuário não encontrado', 404);
        }

        const coursesFromDb = await courseRepository.findByCreatorId(creatorId);

        const coursesDto = coursesFromDb.map(course => new CourseResponseDto(course));
        return coursesDto;
    }

    async replace(id, replaceCourseData) {
        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        const youtubeId = extractYoutubeId(replaceCourseData.url);
    
        if (!youtubeId) {
            throw createHttpError('URL do YouTube inválida', 400);
        }

        const courseToReplace = {
            ...replaceCourseData,
            youtubeId
        };

        const updatedCourseFromDb = await courseRepository.replace(id, courseToReplace);

        const updatedCourseDto = new CourseResponseDto(updatedCourseFromDb);
        return updatedCourseDto;
    }

    async update(id, updateCourseData) {
        if (Object.keys(updateCourseData).length === 0) {
            throw createHttpError('Nenhum dado para atualização foi enviado', 400);
        }

        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        const courseToUpdate = { ...updateCourseData };

        if (updateCourseData.url !== undefined) {
            const youtubeId = extractYoutubeId(updateCourseData.url);
        
            if (!youtubeId) {
                throw createHttpError('URL do YouTube inválida', 400);
            }

            courseToUpdate.youtubeId = youtubeId;
        }

        const updatedCourseFromDb = await courseRepository.update(id, courseToUpdate);

        const updatedCourseDto = new CourseResponseDto(updatedCourseFromDb);
        return updatedCourseDto;
    }

    async delete(id) {
        const courseFromDb = await courseRepository.findById(id);

        if (!courseFromDb) {
            throw createHttpError('Curso não encontrado', 404);
        }

        await courseRepository.delete(id);
    }
}

export default new CourseService();