import { connectDB } from './config/database.js';
import 'dotenv/config';
import app from './app.js';

await connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});