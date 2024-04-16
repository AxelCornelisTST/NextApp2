import {RowDataPacket} from "mysql2";

export interface IAuthUser extends RowDataPacket {
    id: string;
    username: string;
    role: string;
    github_id: string;
}