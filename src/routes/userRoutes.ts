import { Router } from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.post("/create", createUser); // agora deve funcionar certinho
userRouter.get("/getall", getAllUsers); // agora deve funcionar certinho
userRouter.put("/update/:uuid", updateUser); // agora deve funcionar certinho

export default userRouter;
