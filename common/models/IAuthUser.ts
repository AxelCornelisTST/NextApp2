import {RowDataPacket} from "mysql2";

export interface IAuthUser extends RowDataPacket {
    username: string;
    role: string;
    github_id: number;
}