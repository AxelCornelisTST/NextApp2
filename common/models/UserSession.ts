import {Column, Entity, OneToOne, PrimaryColumn} from "typeorm";
import {AuthUserEntity} from "@/common/models/IAuthUser";

@Entity({name: "userSession"})
export class UserSession {
    @PrimaryColumn({type: "varchar"})
    id: string;
    @Column({type: "datetime", nullable: false})
    expires_at: string;
    @OneToOne(() => AuthUserEntity, (user) => user.id, {
        createForeignKeyConstraints: true
    })
    authUserID: string | undefined;

}