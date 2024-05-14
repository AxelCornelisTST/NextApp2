'use server'

import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import {LaptopEntity} from "@/common/models/ILaptop";
import Integer from "@zxing/library/es2015/core/util/Integer";
import {DataSource} from "typeorm";
import {databaseSource} from "@/app/api/authdetails";

export async function updateLaptopAction(prev: any, formData: FormData) {
    const rawFormData = {
        laptop_id: formData.get('laptopid') as string,
        user_id: Integer.parseInt(formData.get('userid') as string)
    }

    //code called in InfoCard : at this point both IDs are known and shouldn't be null,
    //therefor the items found in the database should exist
    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();
    const laptop: LaptopEntity = await dbc.getRepository(LaptopEntity).findOneByOrFail({serialNumber: rawFormData.laptop_id});
    const user: LaptopUserEntity = await dbc.getRepository(LaptopUserEntity).findOneByOrFail({userID: rawFormData.user_id});

    if (laptop && user) {
        laptop.laptopUser = user;
        await dbc.getRepository(LaptopEntity).save(laptop);
    }
    await dbc.destroy();
    return {name: user.firstName, famName: user.familyName, klas: user.klas, id: user.userID};
}

export async function removeUserAction(prev: any, formData: FormData) {
    const rawFormData = {
        laptop_id: formData.get('laptopid') as string,
    }

    //code called in InfoCard : at this point both IDs are known and shouldn't be null,
    //therefor the items found in the database should exist
    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();
    const laptop: LaptopEntity = await dbc.getRepository(LaptopEntity).findOneByOrFail({serialNumber: rawFormData.laptop_id});

    if (laptop) {
        laptop.laptopUser = null;
        await dbc.getRepository(LaptopEntity).save(laptop);
        return "success"
    }
    await dbc.destroy();

    return "no such laptop";
}