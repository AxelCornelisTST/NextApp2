import {RowDataPacket} from "mysql2";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, ValueTransformer,} from "typeorm"

export interface ILaptop extends RowDataPacket {
    SerialNumber: string,
    Brand: string,
    Model: string,
    UserID: number,
    Processor: string
}

@Entity({name: "laptop"})
export class LaptopEntity {

    @Column({type: "varchar", nullable: true})
    serialNumber!: string | null
    Brand: string;
    Model: string;
    Processor: string;
    SerialNumber: string;
    UserID: number;
}