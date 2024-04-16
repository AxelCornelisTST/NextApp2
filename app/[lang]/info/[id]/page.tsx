"use server"
import LaptopRepository from "@/common/repository/LaptopRepository";
import LaptopForm from "@/components/LaptopForm";
import UserRepository from "@/common/repository/LaptopUserRepository";
import {ILaptopUser} from "@/common/models/ILaptopUser";
import BackButton from "@/components/BackButton";
import TranslateServer from "@/components/TranslateServer";
import AccessDenied from "@/components/AccessDenied";
import {validateRequest} from "@/app/login/validateRequest";
import {isAuthorized} from "@/common/sessionhelper";

export default async function Page({params}: { params: { lang: string, id: string } }) {
    const {user, session} = await validateRequest();
    if (isAuthorized(user)) {
        return <AccessDenied lang={params.lang}/>
    }

    const id = params && !Array.isArray(params.id) ? params.id : "err";
    const lang = params && !Array.isArray(params.lang) ? params.lang : "en"
    const laptop = await LaptopRepository.retrieveBy(id);
    let laptopUser: ILaptopUser | undefined
    if (laptop)
        laptopUser = await UserRepository.retrieveBy(laptop.UserID);
    return (
        <div className="flex flex-col items-center justify-between p-10">
            <h1 className="flex items-center font-bold text-xl">Laptop Info</h1>
            {
                laptop
                    ? <LaptopForm lang={lang} laptop={laptop} user={laptopUser}/>
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

