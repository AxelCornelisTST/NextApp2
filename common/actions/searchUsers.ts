'use server'

import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {UserEntity} from "@/common/models/entities";
import {Like} from "typeorm";

export async function findUserAction(prev: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('search'),
    }

    if (!databaseSource.isInitialized)
        await databaseSource.initialize();
    const result = await databaseSource.getRepository(UserEntity).find({
        select: {name: true, role: true, id: true}, where: {name: Like(`%${rawFormData.name}%`)}
    });
    return {
        message: JSON.stringify(result)
    }
}