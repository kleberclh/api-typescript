// src/server.ts
import app from './app';

const port = process.env.PORT || 3032;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
