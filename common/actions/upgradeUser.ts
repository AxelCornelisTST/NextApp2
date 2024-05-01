"use server"
import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {UserEntity} from "@/common/models/entities";
import {roleByName, Roles} from "@/common/sessionhelper";

export async function changeUserRole(prev: any, formData: FormData) {
    const rawFormData = {
        id: formData.get('id')?.toString(),
        role: formData.get('role')?.toString(),
        upgrade: Boolean(formData.get('upgrade'))
    }

    if (!databaseSource.isInitialized)
        await databaseSource.initialize();

    let user: UserEntity | null = null;

    try {
        if (rawFormData.id)
            user = await databaseSource.getRepository(UserEntity).findOneBy({id: rawFormData.id})
        else
            return {message: "error_id"}
    } catch (e) {
        console.log(e)
        return {message: "error_user"}
    }

    if (user && rawFormData.role != null) {
        let enumRole: Roles = roleByName(rawFormData.role);
        if (enumRole == 0 && !rawFormData.upgrade)
            return {message: "error_low"};
        if (enumRole == 2 && rawFormData.upgrade)
            return {message: "error_high"};
        const i: number = enumRole + (rawFormData.upgrade ? 1 : -1);
        user.role = Roles[i];
        await databaseSource.getRepository(UserEntity).save(user);
        return {message: "ok", role: user.role}
    }
    return {message: "error_role"}
}