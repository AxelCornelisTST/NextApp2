'use server'

import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {UserEntity} from "@/common/models/entities";
import {Like} from "typeorm";

export async function findUserAction(prevState: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('search'),
    }
    console.log(rawFormData.name);

    if (!databaseSource.isInitialized)
        await databaseSource.initialize();
    const result = await databaseSource.getRepository(UserEntity).find({
        select: {name: true, role: true}, where: {name: Like(`%${rawFormData.name}%`)}
    });
    console.log(JSON.stringify(result))
    return {
        message : JSON.stringify(result)
    }
}

export async function createUser(prevState: any, formData: FormData) {
    // ...
    return {
        message: 'Please enter a valid email',
    }
}