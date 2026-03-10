
import express from "express"
import { UserController } from "./controller/UserController.js";
import { verifyToken } from "./middelwares/verifytoken.js";
import { AuthController } from "./auth/controller/authController.js";

export const route = express.Router()

route.get('/users', UserController.getUsers);
route.post('/users', UserController.createUser);


route.post('/login',AuthController.login) ;

route.get('/me', verifyToken, UserController.getOneUser)