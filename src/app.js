import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { authenticate } from './middlewares/authMiddleware.js';
import { handleGlobalError } from './middlewares/errorMiddleware.js';
import authRouter from './routes/authRoutes.js';
import courseRouter from './routes/courseRoutes.js';
import userRouter from './routes/userRoutes.js';
import webRouter from './routes/webRoutes.js';
import swaggerSpec from './swagger/swagger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRouter);
app.use('/api/users', authenticate, userRouter);
app.use('/api/courses', authenticate, courseRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', webRouter);

app.use(handleGlobalError);

export default app;
