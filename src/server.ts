// src/server.ts
import app from './app';

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
