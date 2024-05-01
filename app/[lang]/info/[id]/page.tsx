"use server"
import LaptopForm from "@/components/LaptopForm";
import BackButton from "@/components/BackButton";
import TranslateServer from "@/components/TranslateServer";
import {getServerSession} from "next-auth";
import {authOptions, databaseSource} from "@/app/api/auth/[...nextauth]/route";
import AccessDenied from "@/components/AccessDenied";
import {LaptopEntity} from "@/common/models/ILaptop";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import {migrationDataSource} from "@/ormconfig";

export default async function Page({params}: { params: { lang: string, id: string } }) {
    const session = getServerSession(authOptions);
    if (!session)
        return <AccessDenied lang={params.lang}/>

    const id = params && !Array.isArray(params.id) ? params.id : "err";
    const lang = params && !Array.isArray(params.lang) ? params.lang : "en"
    const laptop = await databaseSource.getRepository(LaptopEntity).findOneBy({serialNumber: id});
    let user = undefined
    if (laptop)
        user = await databaseSource.getRepository(LaptopUserEntity).findOneBy({userID: laptop.laptopUser.userID});
    return (
        <div className="flex flex-col items-center justify-between p-10">
            <h1 className="flex items-center font-bold text-xl">Laptop Info</h1>
            {
                laptop
                    ? <LaptopForm lang={lang} laptop={laptop} user={user}/>
                    : <div className={"flex flex-col items-center"}>
                        <div className={"error font-bold text-red-700 py-10 text-center"}>
                            <TranslateServer lang={lang} text={"no_laptop_in_database"} variables={{id}}/>
                        </div>
                        <BackButton lang={lang}/>
                    </div>
            }
        </div>
    )
}

