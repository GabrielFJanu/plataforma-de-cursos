/**
 * @swagger
 * components:
 *   schemas:
 *     UserId:
 *       type: string
 *       format: uuid
 *       example: a69ec8df-03fd-4ae4-bd4d-a45fc361875a
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           $ref: '#/components/schemas/UserId'
 *         username:
 *           type: string
 *           example: gabriel
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T01:43:12.000Z
 *     CreateUserRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *           example: gabriel
 *         password:
 *           type: string
 *           format: password
 *           example: senha123
 *         role:
 *           type: string
 *           enum:
 *             - user
 *             - admin
 *           example: user
 *     UpdateUserRequest:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: gabriel_novo
 *         password:
 *           type: string
 *           format: password
 *           example: novasenha123
 *         role:
 *           type: string
 *           enum:
 *             - user
 *             - admin
 *           example: admin
 */
