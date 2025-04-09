// config/swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API Express com Swagger',
      version: '1.0.1',
      description: 'Documentação da API usando Swagger',
    },
    servers: [
      {
        url: 'http://localhost:4001', // ajuste conforme necessário
      },
      {
        url: 'http://lnkfcphcz72jgeehvurtadmg4yuawx.maisinternet.net.br:4005/', // ajuste conforme necessário
      },
    ],
  },
  apis: ['src/routes/*.ts', 'src/controllers/*.ts'], // ajuste o caminho conforme sua estrutura
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
