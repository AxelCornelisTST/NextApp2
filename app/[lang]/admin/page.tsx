"use server"
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import TranslateClient from "@/components/i18n/TranslateClient";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/authdetails";
import ButtonClient from "@/components/ButtonClient";
import BackButton from "@/components/BackButton";

export default async function Role({params}: { params: { lang: string, id: string } }) {
    const session = await getServerSession(authOptions);
    const userSession = new SessionHelper(session);

    if (!session || !userSession.isAdmin())
        return <AccessDenied lang={params.lang}/>

    return (
        <div className="flex flex-col items-center justify-between p-10">
            <TranslateClient lang={params.lang} text={'title_admin_page'} className={"font-bold text-xl pb-20"}/>
            <ButtonClient lang={params.lang} route={"/admin/role"} text={"button_admin_role"}/>
            <ButtonClient lang={params.lang} route={"/admin/roles"} text={"button_admin_home"}/>
            <ButtonClient lang={params.lang} route={"/admin/roles"} text={"button_admin_home2"}/>
            <BackButton lang={params.lang}/>
        </div>
    );
}