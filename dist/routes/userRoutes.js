"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
/**
 * @openapi
 * /user/create:
 *   post:
 *     tags:
 *       - Usuários
 *     summary: Cria usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Usuário criado com sucesso!
 */
userRouter.post("/create", userController_1.createUser);
/**
 * @openapi
 * /user/getall:
 *   get:
 *     tags:
 *       - Usuários
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
userRouter.get("/getall", userController_1.getAllUsers); // agora deve funcionar certinho
userRouter.put("/update/:uuid", userController_1.updateUser); // agora deve funcionar certinho
exports.default = userRouter;
