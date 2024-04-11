"use server"
import Image from "next/image";
import TranslateServer from "@/components/TranslateServer";
import {getServerSession} from "next-auth";
import {getSessionName, isAuthorized} from "@/common/sessionhelper";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home({params}: { params: { lang: string } }) {
    const session = await getServerSession(authOptions)
    const name: string = getSessionName(session);

    return (
        <div className="items-center flex flex-col justify-between">
            <TranslateServer lang={params.lang} text={'welcome'} className={"py-10 font-bold text-4xl"}/>
            <Image src={"/img.png"} alt={"laptop icon"} width={512} height={512} className={"w-fit"}/>
            {
                session ?
                    isAuthorized(session) ?
                        <TranslateServer lang={params.lang} text={'homepage_greeting'} variables={{name}}
                                         className={"px-10 py-5 text-xl text-center"}/>
                        :
                        <TranslateServer lang={params.lang} text={'homepage_contact_admin'} variables={{name}}
                                         className={"px-10 py-5 text-xl text-center"}/>
                    :
                    <TranslateServer lang={params.lang} text={'homepage_login_request'}
                                     className={"py-10 text-xl text-center"}/>
            }
        </div>
    );
}
