'use server'
import {databaseSource} from "@/app/api/authdetails";
import {LaptopEntity} from "@/common/models/ILaptop";
import {DataSource} from "typeorm";

export async function markLaptopForRepairAction(prev: any, formData: FormData) {
    const rawFormData = {
        laptop_id: formData.get('laptopid') as string,
    }

    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();
    const laptop: LaptopEntity = await dbc.getRepository(LaptopEntity).findOneByOrFail({serialNumber: rawFormData.laptop_id});

    try {
        if (laptop) {
            laptop.isBeingRepaired = !Boolean(laptop.isBeingRepaired)
            await dbc.getRepository(LaptopEntity).save(laptop);
        }
    } catch (e) {
        console.log((e as Error).message);
        await dbc.destroy();
        return "failed"
    }
    await dbc.destroy();
    return "ok"
}