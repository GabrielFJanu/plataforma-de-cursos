import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cursoRouter from './routes/cursoRoutes.js';
import usuarioRouter from './routes/usuarioRoutes.js';
import webRouter from './routes/webRoutes.js';
import { globalErrorHandler } from './middlewares/errorMiddleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use('/api/cursos', cursoRouter);
app.use('/api/usuarios', usuarioRouter);
app.use('/', webRouter);

app.use(globalErrorHandler);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

export default app;