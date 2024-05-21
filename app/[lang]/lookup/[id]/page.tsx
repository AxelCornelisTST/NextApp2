'use server'
import BackButton from "@/components/BackButton";
import TranslateServer from "@/components/i18n/TranslateServer";
import {getServerSession} from "next-auth";
import {authOptions, databaseSource} from "@/app/api/authdetails";

import AccessDenied from "@/components/AccessDenied";
import {LaptopEntity} from "@/common/models/ILaptop";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import InfoCard from "@/components/cards/InfoCard";
import {DataSource} from "typeorm";

export default async function Page({params}: { params: { lang: string, id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user)
        return <AccessDenied lang={params.lang}/>

    const id = params && !Array.isArray(params.id) ? params.id : "err";
    const lang = params && !Array.isArray(params.lang) ? params.lang : "en"
    let dbc: DataSource = databaseSource;
    if (!databaseSource.isInitialized)
        dbc = await databaseSource.initialize();

    const laptop = await dbc.getRepository(LaptopEntity).findOne({
        where: {serialNumber: id},
        relations: ['laptopUser']
    });
    console.log(laptop)
    let user = undefined

    if (laptop && laptop.laptopUser)
        user = await dbc.getRepository(LaptopUserEntity).findOneBy({userID: laptop.laptopUser.userID});
    await dbc.destroy();

    return (
        <div className="flex flex-col items-center justify-between p-10">
            <h1 className="flex items-center font-bold text-xl">Laptop Info</h1>
            {
                laptop
                    ?
                    <div className={"grid grid-cols-1 gap-2 backdrop-blur-sm pb-5"}>
                        <InfoCard lang={params.lang}
                                  laptop={{
                                      sn: laptop.serialNumber,
                                      brand: laptop.brand,
                                      details: laptop.processor,
                                      model: laptop.model,
                                      inRepair: laptop.isBeingRepaired
                                  }}
                                  user={user ? {
                                      name: user.firstName,
                                      famName: user.familyName,
                                      klas: user.klas,
                                      id: user.userID
                                  } : undefined}
                        />
                    </div>
                    :
                    <div className={"flex flex-col items-center"}>
                        <div className={"error font-bold text-red-700 py-10 text-center"}>
                            <TranslateServer lang={lang} text={"no_laptop_in_database"} variables={{id}}/>
                        </div>
                    </div>
            }
            <BackButton lang={lang}/>
        </div>
    )
}

