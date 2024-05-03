'use server'

import {databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {Like} from "typeorm";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";

export async function findLaptopUserAction(prev: any, formData: FormData) {
    const rawFormData = {
        name: formData.get('search'),
    }

    /*form is empty or input hasn't changed, refuse database connection*/
    if (!rawFormData.name || rawFormData.name === prev.prevText) {
        //console.log("connection refused, loading old data")
        return {
            message: prev.message,
            prevText: rawFormData.name
        };
    }

    if (!databaseSource.isInitialized)
        await databaseSource.initialize();
    const result = await databaseSource.getRepository(LaptopUserEntity).find({
        select: {firstName: true, familyName: true, userID: true},
        where: [{firstName: Like(`%${rawFormData.name}%`)}, {familyName: Like(`%${rawFormData.name}%`)}]
    });
    return {
        message: JSON.stringify(result),
        prevText: rawFormData.name
    };
}