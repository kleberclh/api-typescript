import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/create", createUser); // agora deve funcionar certinho
/**
 * @openapi
 * /api/usuarios:
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
