import { db } from "../config/db.js";
import type { IUser } from "../interface/UserInterface.js";
  import type { ResultSetHeader } from "mysql2";

export class UserModel {
    static async getAll() : Promise<IUser[]>{
        try {
            const [Users]= await db.query('SELECT * FROM users');
            return Users as IUser[] ;
            
        } catch (error) {
            return [];
        }

    }

   static async getUserByEmail(email: string): Promise<IUser | null> {
  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    const users = rows as IUser[];

    return users[0] || null;

  } catch (error) {
    console.log(error);
    return null;
  }
}


static async create(user: IUser): Promise<ResultSetHeader> {

    const [result] = await db.query<ResultSetHeader>(
        `INSERT INTO users (name,email,password,height,age,image)
         VALUES (?,?,?,?,?,?)`,
        [
            user.name,
            user.email,
            user.password,
            user.height,
            user.age,
            user.image
        ]
    );

    return result;
}

}

