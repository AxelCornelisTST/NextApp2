import {RowDataPacket} from "mysql2";

export interface ILaptopUser extends RowDataPacket {
    UserID: number;
    Name: string;
    FamilyName: string;
    emailOuder1: string;
    emailOuder2: string;
}