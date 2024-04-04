import {RowDataPacket} from "mysql2";

export interface IUser extends RowDataPacket {
    UserID: number;
    Name: string;
    FamilyName: string;
    emailOuder1: string;
    emailOuder2: string;
}