import type { Request, Response } from "express";
import type { AuthRequest } from "../middelwares/verifytoken.js";
export declare class UserController {
    static getUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getOneUser(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    static createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=UserController.d.ts.map