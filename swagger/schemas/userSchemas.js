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
 *         firstname:
 *           type: string
 *           example: Gabriel
 *         lastname:
 *           type: string
 *           example: Januario
 *         email:
 *           type: string
 *           format: email
 *           example: gabriel@email.com
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2026-05-12T01:43:12.000Z
 *     CreateUserRequest:
 *       type: object
 *       required:
 *         - firstname
 *         - email
 *       properties:
 *         firstname:
 *           type: string
 *           example: Gabriel
 *         lastname:
 *           type: string
 *           example: Januario
 *         email:
 *           type: string
 *           format: email
 *           example: gabriel@email.com
 *     UpdateUserRequest:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Gabriel
 *         lastname:
 *           type: string
 *           example: Januario
 *         email:
 *           type: string
 *           format: email
 *           example: gabriel.novo@email.com
 */