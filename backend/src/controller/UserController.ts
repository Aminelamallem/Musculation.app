import type { Request, Response } from "express";
import { UserModel } from "../repository/UserRepository.js";
import type { IUser } from "../interface/UserInterface.js";
import bcrypt from "bcrypt";
import type { ResultSetHeader } from "mysql2";
import { db } from "../config/db.js";
import type { AuthRequest } from "../middelwares/verifytoken.js";
export class UserController{

static async getUsers(req:Request,res:Response){
    try {
        const users = await UserModel.getAll() as IUser[];
           return res.status(200).json(users);

        
    } catch (error) {
        return res.status(500).send('error:' + error)
    }
    
}
	 

    static async getOneUser(req: AuthRequest, res: Response) {

        try {
            return res.status(200).json(req.user)
        } catch (error) {
            // console.log(error);
            return res.status(500).send('error:' + error)
        }
    }



  static async createUser(req: Request, res: Response) {


    try {
       if (!req.body) {
                return res.status(404).json()
            }
              const salt = await bcrypt.genSalt()
             const hashedPassword = await bcrypt.hash(req.body.password,salt);
            const newUser = {
                ...req.body, password: hashedPassword,
            }
            const result = await UserModel.create(newUser) as ResultSetHeader;

            if (result.insertId) {
                res.status(201).json({ message: "Utilisateur créé", result });
            } else {
                res.status(500).json({ message: "Erreur" });
            }

    //      const users = await UserModel.create(req.body);
    // res.status(201).json(users);
    } catch (error) {
       return res.status(500).send('error:' + error)
    }
    
 
  }
	
	
}