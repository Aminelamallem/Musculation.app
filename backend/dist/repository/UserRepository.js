import { db } from "../config/db.js";
export class UserModel {
    static async getAll() {
        try {
            const [Users] = await db.query('SELECT * FROM users');
            return Users;
        }
        catch (error) {
            return [];
        }
    }
    static async getUserByEmail(email) {
        try {
            const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
            const users = rows;
            return users[0] || null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    static async create(user) {
        const [result] = await db.query(`INSERT INTO users (name,email,password,height,age,image)
         VALUES (?,?,?,?,?,?)`, [
            user.name,
            user.email,
            user.password,
            user.height,
            user.age,
            user.image
        ]);
        return result;
    }
}
//# sourceMappingURL=UserRepository.js.map