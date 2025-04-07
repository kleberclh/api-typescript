import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();
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

userRouter.post("/create", createUser);
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
userRouter.get("/getall", getAllUsers); // agora deve funcionar certinho
userRouter.put("/update/:uuid", updateUser); // agora deve funcionar certinho

export default userRouter;
