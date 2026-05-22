import express from "express";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);

export default app;


// 1. Importa las librerías usando el formato ESM
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

// Permite cargar archivos JSON en entornos ES Modules
const requireJson = createRequire(import.meta.url);
const swaggerDocument = requireJson('../swagger.json'); 

// 2. Agrega la ruta de la documentación (Colócala justo debajo de app.use(router);)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
