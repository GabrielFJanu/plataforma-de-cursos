/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       additionalProperties: false
 *       required:
 *         - username
 *         - password
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
 *     RegisterRequest:
 *       type: object
 *       additionalProperties: false
 *       required:
 *         - username
 *         - password
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
 *     AuthTokenResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */

