import {RowDataPacket} from "mysql2";
import {Column, Entity} from "typeorm";

export interface ILaptopUserBase {
    userID: number;
    name: string;
    familyName: string;
    emailOuder1: string;
    emailOuder2: string;
}

@Entity({name: "laptopUser"})
export class LaptopUserEntity implements ILaptopUserBase {
    @Column({type: "string", nullable: false})
    emailOuder1: string;
    @Column({type: "string", nullable: false})
    emailOuder2: string;
    @Column({type: "string", nullable: false})
    familyName: string;
    @Column({type: "string", nullable: false})
    name: string;
    @Column({type: "number", nullable: true, unique: true})
    userID: number;

}