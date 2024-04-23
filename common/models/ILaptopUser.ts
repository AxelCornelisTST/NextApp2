import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {LaptopEntity} from "./ILaptop";

@Entity({name: "laptopUser"})
export class LaptopUserEntity {
    @PrimaryColumn({type: "int", unique: true})
    userID: number;
    @Column({type: "varchar", nullable: false})
    emailOuder1: string;
    @Column({type: "varchar", nullable: false})
    emailOuder2: string;
    @Column({type: "varchar", nullable: false})
    familyName: string;
    @Column({type: "varchar", nullable: false})
    name: string;

    @OneToMany(() => LaptopEntity, (le) => le.laptopUser)
    laptop: LaptopEntity[]

}