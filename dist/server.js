"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT;
app_1.default.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
