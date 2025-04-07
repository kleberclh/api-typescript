// src/app.ts
import express from "express";
import routes from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';


const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", routes);

export default app;
