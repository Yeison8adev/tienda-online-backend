import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/db.js';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';



// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares base
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api', apiRoutes);
app.use(errorHandler);



// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API Tienda Online funcionando 🚀');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
