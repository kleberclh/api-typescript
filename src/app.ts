import express from "express";
import routes from "./routes";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

const app = express();

app.use(express.json());

// Rota padrão HTML para "/"
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>API TypeScript</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #007bff; }
          a { color: #333; text-decoration: none; border-bottom: 1px solid #ccc; }
        </style>
      </head>
      <body>
        <h1>🚀 API TypeScript Rodando!</h1>
        <p><a href="/api-docs">Ver documentação Swagger</a></p>
      </body>
    </html>
  `);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", routes);

export default app;
