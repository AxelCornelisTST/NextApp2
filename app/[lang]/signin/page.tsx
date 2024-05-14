"use server"
import {redirect} from "next/navigation";
import Image from "next/image";
import TranslateServer from "@/components/i18n/TranslateServer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/authdetails";
import ButtonGithub from "@/components/ButtonGithub";

export default async function CustomLogin({params}: { params: { lang: string } }) {

    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/");
    }
    return (
        <div className={" flex flex-col items-center justify-between pt-20"}>

            <Image src={"/images/logo.svg"} alt={"tst logo"} loading={"lazy"} width={720 / 4} height={480 / 4}/>
            <TranslateServer lang={params.lang} text={"app_title"}
                             className={"text-2xl font-bold text-center "}/>
            <TranslateServer lang={params.lang} text={"button_nav_login"}
                             className={"text-2xl mb-10 font-bold text-center "}/>

            <div className={"border-2 border-blue-300 p-20 rounded-2xl backdrop-blur-sm"}>
                <ButtonGithub lang={params.lang}/>
            </div>

        </div>)
}