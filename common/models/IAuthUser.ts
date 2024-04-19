import {RowDataPacket} from "mysql2";
import {Column, Entity} from "typeorm";

export interface IAuthUserBase {
    id: string;
    username: string;
    role: string | undefined;
    github_id: string;
}

export interface IRowDataAuthUser extends IAuthUserBase, RowDataPacket {
}

@Entity({name: "authUser"})
export class AuthUserEntity implements IAuthUserBase {
    @Column({type: "varchar", nullable: false})
    id: string;
    @Column({type: "varchar", nullable: false})
    github_id: string;
    @Column({type: "varchar", nullable: true})
    role: string | undefined;
    @Column({type: "varchar", nullable: false})
    username: string;

}