'use server'

import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {UserEntity} from "@/common/models/entities";
import {DataSource, Like} from "typeorm";

export async function findUserAction(prev: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('search'),
    }

    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();
    const result = await dbc.getRepository(UserEntity).find({
        select: {name: true, role: true, id: true}, where: {name: Like(`%${rawFormData.name}%`)}
    });
    await dbc.destroy();

    return {
        message: JSON.stringify(result)
    }
}