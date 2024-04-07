"use server"
import LaptopRepository from "@/common/repository/LaptopRepository";
import LaptopForm from "@/components/LaptopForm";
import UserRepository from "@/common/repository/UserRepository";
import {IUser} from "@/common/models/IUser";
import BackButton from "@/components/BackButton";
import TranslateServer from "@/components/TranslateServer";

interface Props {
    searchParams?: {
        id: string;
    };
}

async function Page({params}: { params: { lang: string, id: string } }) {
    const id = params && !Array.isArray(params.id) ? params.id : "err";
    const lang = params && !Array.isArray(params.lang) ? params.lang : "en"

    const laptop = await LaptopRepository.retrieveBy(id);
    let user: IUser | undefined
    if (laptop)
        user = await UserRepository.retrieveBy(laptop.UserID);
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

