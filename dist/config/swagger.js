"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// config/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
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
                url: 'http://produção:4001', // ajuste conforme necessário
            },
        ],
    },
    apis: ['src/routes/*.ts', 'src/controllers/*.ts'], // ajuste o caminho conforme sua estrutura
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
