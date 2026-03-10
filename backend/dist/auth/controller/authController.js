import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../../repository/UserRepository.js";
export class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Identifiant requise" });
            }
            const userIfExist = await UserModel.getUserByEmail(email);
            if (!userIfExist) {
                return res.status(401).json({ message: "Crendential not valide" });
            }
            const isValidePassword = await bcrypt.compare(password, userIfExist.password);
            if (!isValidePassword) {
                return res.status(401).json({ message: "Crendential not valide" });
            }
            const generateToken = jwt.sign({ user_id: userIfExist.id, user_email: userIfExist.email, role: "user" }, process.env.SECRET_KEY || "dgjshdfguykdshgdfkjhgfjdsf0011231141.20231$$", {
                expiresIn: "15min"
            });
            res.cookie('access_token', `${generateToken}`, {
                expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
            });
            return res.status(200).json({
                message: "Connexion réussit",
            });
        }
        catch (err) {
            console.log('err :>> ', err);
            res.status(500).json({ message: 'erreur' });
        }
    }
}
//# sourceMappingURL=authController.js.map