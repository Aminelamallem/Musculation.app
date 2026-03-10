import type { NextFunction, Request, Response } from "express";
import type { IUser } from "../interface/UserInterface.js";
export interface AuthRequest extends Request {
    user?: IUser;
}
export declare const verifyToken: (req: AuthRequest, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=verifytoken.d.ts.map