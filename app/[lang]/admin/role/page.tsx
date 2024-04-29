"use server"
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import TranslateClient from "@/components/TranslateClient";
import {getServerSession} from "next-auth";
import {authOptions, databaseSource} from "@/app/api/auth/[...nextauth]/route";
import {LaptopEntity} from "@/common/models/ILaptop";
import {UserEntity} from "@/common/models/entities";

export default async function Role({params}: { params: { lang: string, id: string } }) {
    const session = await getServerSession(authOptions);
    const userSession = new SessionHelper(session);

    if (!databaseSource.isInitialized)
        await databaseSource.initialize()

    let allUsers: UserEntity[] = [];
    try {
        allUsers = await databaseSource.getRepository(UserEntity).find(); //cache result 1 minute
    } catch (error) {
        console.log(error)
    }

    await databaseSource.destroy();

    if (!session || !userSession.isAdmin())
        return <AccessDenied lang={params.lang}/>

    return (
        <div className="flex flex-col justify-between p-10 items-center bg-blue-950">
            <TranslateClient lang={params.lang} text={'title_roles'} className={"font-bold text-xl pd-20"}/>
            <div className={"items-start"}>
            </div>
            {
                allUsers.map(value => {
                    return (
                        <div key={value.id} className={"py-4 items-stretch bg-amber-700 w-screen px-10"}>
                            {
                                value.name
                            }
                        </div>)
                })
            }
        </div>
    );
}