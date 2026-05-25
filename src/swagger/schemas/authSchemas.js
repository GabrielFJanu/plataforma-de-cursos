/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: gabriel@email.com
 *         password:
 *           type: string
 *           format: password
 *           example: senha123
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - firstname
 *         - email
 *         - password
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
 *         password:
 *           type: string
 *           format: password
 *           example: senha123
 *     AuthTokenResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */
