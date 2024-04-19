import {RowDataPacket} from "mysql2";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, ValueTransformer,} from "typeorm"
import {LaptopUserEntity} from "@/common/models/ILaptopUser";

export interface ILaptopBase {
    serialNumber: string,
    brand: string,
    model: string,
    laptopUserID: LaptopUserEntity,
    processor: string
}

export interface IRowDataLaptop extends ILaptopBase, RowDataPacket {

}

@Entity({name: "laptop"})
export class LaptopEntity implements ILaptopBase {
    @Column({type: "varchar", nullable: false, unique: true})
    serialNumber!: string
    @Column({type: "varchar", nullable: false})
    brand: string;
    @Column({type: "varchar", nullable: false})
    model: string;
    @Column({type: "varchar", nullable: false})
    processor: string;

    @ManyToOne(() => LaptopUserEntity, (user) => user.userID, {
        createForeignKeyConstraints: true
    })
    laptopUserID: LaptopUserEntity
}