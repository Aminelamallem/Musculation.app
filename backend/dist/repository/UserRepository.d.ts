import type { IUser } from "../interface/UserInterface.js";
import type { ResultSetHeader } from "mysql2";
export declare class UserModel {
    static getAll(): Promise<IUser[]>;
    static getUserByEmail(email: string): Promise<IUser | null>;
    static create(user: IUser): Promise<ResultSetHeader>;
}
//# sourceMappingURL=UserRepository.d.ts.map