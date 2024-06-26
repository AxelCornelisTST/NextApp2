import {Column, Entity, ManyToOne, PrimaryColumn,} from "typeorm"
import {LaptopUserEntity} from "./ILaptopUser";

@Entity({name: "laptop"})
export class LaptopEntity {
    @PrimaryColumn({type: "varchar", nullable: false, unique: true, default: null})
    serialNumber!: string
    @Column({type: "varchar", nullable: false})
    brand: string;
    @Column({type: "varchar", nullable: false})
    model: string;
    @Column({type: "varchar", nullable: false})
    processor: string;

    @Column({type: 'tinyint', width: 1, nullable: false, default: false})
    isBeingRepaired: boolean = false;

    @ManyToOne(() => LaptopUserEntity, (lue) => lue.userID, {
        createForeignKeyConstraints: true, nullable: true
    })
    laptopUser: LaptopUserEntity | null
}