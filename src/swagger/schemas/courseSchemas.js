/**
 * @swagger
 * components:
 *   schemas:
 *     CourseId:
 *       type: string
 *       format: uuid
 *       example: 6cbff579-cf9c-40ac-a424-2a51c008c509
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           $ref: '#/components/schemas/CourseId'
 *         title:
 *           type: string
 *           example: Como desenhar do ZERO
 *         description:
 *           type: string
 *           example: Curso introdutorio de desenho para iniciantes
 *         knowledgeArea:
 *           type: string
 *           example: Artes
 *         url:
 *           type: string
 *           format: uri
 *           example: https://www.youtube.com/watch?v=3CKCOYvqZIk
 *         youtubeId:
 *           type: string
 *           example: 3CKCOYvqZIk
 *         creatorId:
 *           type: string
 *           format: uuid
 *           example: a69ec8df-03fd-4ae4-bd4d-a45fc361875a
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T01:44:03.000Z
 *     CreateCourseRequest:
 *       type: object
 *       required:
 *         - title
 *         - knowledgeArea
 *         - url
 *       properties:
 *         title:
 *           type: string
 *           example: Curso de JavaScript moderno
 *         description:
 *           type: string
 *           example: Curso introdutorio de JavaScript para backend
 *         knowledgeArea:
 *           type: string
 *           example: Programacao
 *         url:
 *           type: string
 *           format: uri
 *           example: https://www.youtube.com/watch?v=Y9Zw6xOGly0
 *     UpdateCourseRequest:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           example: Curso de JavaScript atualizado
 *         description:
 *           type: string
 *           example: Curso atualizado de JavaScript para backend
 *         knowledgeArea:
 *           type: string
 *           example: Programacao
 *         url:
 *           type: string
 *           format: uri
 *           example: https://youtu.be/Y9Zw6xOGly0
 */