import express from 'express';
import cursoRoutes from './routes/cursoRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import { globalErrorHandler } from './middlewares/errorMiddleware.js';

const app = express();

app.use(express.json());

app.use('/api/cursos', cursoRoutes);
app.use('/api/usuarios', usuarioRoutes);

app.use(globalErrorHandler);

export default app;