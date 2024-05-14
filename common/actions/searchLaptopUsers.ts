'use server'

import {DataSource, Like} from "typeorm";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import {databaseSource} from "@/app/api/authdetails";

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

    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();

    const result = await dbc.getRepository(LaptopUserEntity).find({
        select: {firstName: true, familyName: true, userID: true},
        where: [{firstName: Like(`%${rawFormData.name}%`)}, {familyName: Like(`%${rawFormData.name}%`)}]
    });
    await dbc.destroy();
    return {
        message: JSON.stringify(result),
        prevText: rawFormData.name
    };
}