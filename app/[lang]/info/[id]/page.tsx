"use server"
import LaptopRepository from "@/common/repository/LaptopRepository";
import LaptopForm from "@/components/LaptopForm";
import UserRepository from "@/common/repository/UserRepository";
import {IUser} from "@/common/models/IUser";
import BackButton from "@/components/BackButton";
import {AppRouterPageRoute, AppRouterPageRouteOpts, getSession, withPageAuthRequired} from "@auth0/nextjs-auth0";
import TranslateServer from "@/components/TranslateServer";
import {useTranslation} from "@/app/i18n";
import {param} from "ts-interface-checker";

interface Props {
    searchParams?: {
        id: string;
    };
}

export default withPageAuthRequired(
    async function Page(routerPageOpts: AppRouterPageRouteOpts) {
        const id = routerPageOpts.params && !Array.isArray(routerPageOpts.params.id) ? routerPageOpts.params.id : "err";
        const lang = routerPageOpts.params && !Array.isArray(routerPageOpts.params.lang) ? routerPageOpts.params.lang : "en"
        const {t} = await useTranslation(lang)

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
    } as AppRouterPageRoute, {returnTo: '/'}
);

