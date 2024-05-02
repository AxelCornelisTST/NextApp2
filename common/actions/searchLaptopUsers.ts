'use server'

import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {Like} from "typeorm";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";

export async function findLaptopUserAction(prev: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('search'),
    }

    if (!databaseSource.isInitialized)
        await databaseSource.initialize();
    const result = await databaseSource.getRepository(LaptopUserEntity).find({
        select: {firstName: true, familyName: true, userID: true},
        where: [{firstName: Like(`%${rawFormData.name}%`)}, {familyName: Like(`%${rawFormData.name}%`)}]
    });
    return {
        message: JSON.stringify(result)
    }
}