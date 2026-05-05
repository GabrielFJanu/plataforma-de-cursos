import express from 'express';
import cursoRoutes from './routes/cursoRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/cursos', cursoRoutes);

export default app;