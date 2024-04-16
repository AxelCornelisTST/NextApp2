import {RowDataPacket} from "mysql2";
import {Column, Entity} from "typeorm";

interface ILaptopUserBase {
    userID: number;
    name: string;
    familyName: string;
    emailOuder1: string;
    emailOuder2: string;
}

export interface ILaptopUser extends ILaptopUserBase, RowDataPacket {
}

@Entity({name: "laptopUser"})
export class LaptopUserEntity implements ILaptopUserBase {
    @Column({type: "varchar", nullable: false})
    emailOuder1: string;
    @Column({type: "varchar", nullable: false})
    emailOuder2: string;
    @Column({type: "varchar", nullable: false})
    familyName: string;
    @Column({type: "varchar", nullable: false})
    name: string;
    @Column({type: "number", nullable: true, unique: true})
    userID: number;

}