/**
 * @swagger
 * components:
 *   schemas:
 *     UserId:
 *       type: string
 *       pattern: ^[0-9a-fA-F]{24}$
 *       example: 665a8e7d3f2c9d001f7b1234
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           $ref: '#/components/schemas/UserId'
 *         username:
 *           type: string
 *           example: gabriel
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T01:43:12.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T02:05:20.000Z
 *     CreateUserRequest:
 *       type: object
 *       additionalProperties: false
 *       required:
 *         - username
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *           example: gabriel
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           maxLength: 72
 *           example: senha1234
 *         role:
 *           type: string
 *           enum:
 *             - user
 *             - admin
 *           example: user
 *     UpdateUserRequest:
 *       type: object
 *       additionalProperties: false
 *       properties:
 *         username:
 *           type: string
 *           minLength: 3
 *           maxLength: 30
 *           example: gabriel_novo
 *         password:
 *           type: string
 *           format: password
 *           minLength: 8
 *           maxLength: 72
 *           example: novasenha123
 *         role:
 *           type: string
 *           enum:
 *             - user
 *             - admin
 *           example: admin
 */
