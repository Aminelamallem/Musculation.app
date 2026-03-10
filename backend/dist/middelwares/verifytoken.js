import dotenv from "dotenv";
import { UserModel } from "../repository/UserRepository.js";
import jwt from "jsonwebtoken";
// import type { IUser } from "../auth/module/user/userController.ts";
// import UserRepository from "../auth/module/user/UserRepository.ts";
dotenv.config();
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            return res.status(401).json({ message: "Action non autorisée" });
        }
        const tokenDecode = jwt.verify(token, process.env.SECRET_KEY || "dgjshdfguykdshgdfkjhgfjdsf0011231141.20231$$");
        const userIfExist = await UserModel.getUserByEmail(tokenDecode.user_email);
        if (!userIfExist) {
            return res.status(401).json({ message: "Action non autorisée" });
        }
        req.user = userIfExist;
        next();
    }
    catch (err) {
        // console.log(err);
        return res.status(500).json({ message: "Erreur du serveurs" });
    }
};
//# sourceMappingURL=verifytoken.js.map