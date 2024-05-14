"use server"
require('dotenv').config({path: '.env.local'});
import {databaseSource} from "@/app/api/authdetails";
import {UserEntity} from "@/common/models/entities";
import {roleByName, Roles} from "@/common/sessionhelper";
import {DataSource} from "typeorm";

export async function changeUserRole(prev: any, formData: FormData) {
    const rawFormData = {
        id: formData.get('id')?.toString(),
        role: formData.get('role')?.toString(),
        upgrade: Boolean(formData.get('upgrade'))
    }

    let user: UserEntity | null = null;

    try {
        if (rawFormData.id) {
            let dbc: DataSource = databaseSource;
            if (!databaseSource.isInitialized)
                dbc = await databaseSource.initialize();
            user = await dbc.getRepository(UserEntity).findOneBy({id: rawFormData.id})
            await dbc.destroy();
        } else
            return {message: "error_id"}
    } catch (e) {
        console.log(e)
        return {message: "error_user"}
    }
    // await databaseSource.destroy();
    if (user && rawFormData.role != null) {
        let enumRole: Roles = roleByName(rawFormData.role);
        if (enumRole == 0 && !rawFormData.upgrade)
            return {message: "error_low"};
        if (enumRole == 2 && rawFormData.upgrade)
            return {message: "error_high"};
        const i: number = enumRole + (rawFormData.upgrade ? 1 : -1);
        user.role = Roles[i];
        let dbc: DataSource = databaseSource;
        if (!databaseSource.isInitialized)
            dbc = await databaseSource.initialize();
        await dbc.getRepository(UserEntity).save(user);
        await dbc.destroy();
        return {message: "ok", role: user.role}
    }
    return {message: "error_role"}
}