import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const config = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "name",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
};
export const db = mysql.createPool(config);
//# sourceMappingURL=db.js.map