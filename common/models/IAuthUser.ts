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
    @Column({type: "number", nullable: false})
    github_id: string;
    @Column({type: "string", nullable: true})
    role: string | undefined;
    @Column({type: "string", nullable: false})
    username: string;

}