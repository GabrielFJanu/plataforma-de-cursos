/**
 * @swagger
 * components:
 *   schemas:
 *     CourseId:
 *       type: string
 *       example: 665a8e7d3f2c9d001f7b1235
 *     Course:
 *       type: object
 *       properties:
 *         _id:
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
 *         creator:
 *           type: object
 *           properties:
 *             _id:
 *               $ref: '#/components/schemas/UserId'
 *             username:
 *               type: string
 *               example: gabriel
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T01:44:03.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T02:10:30.000Z
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
 *           example: Programação
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
 *           example: Programação
 *         url:
 *           type: string
 *           format: uri
 *           example: https://youtu.be/Y9Zw6xOGly0
 */

