import {RowDataPacket} from "mysql2";

export interface ILaptop extends RowDataPacket {
    SerialNumber: string,
    Brand: string,
    Model: string,
    UserID: number,
    Processor: string
}