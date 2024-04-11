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
        <div className="items-center flex flex-col justify-between h-max">
            <TranslateServer lang={params.lang} text={'Inventory DataBase Scanner'}
                             className={"text-center py-10 font-bold text-4xl backdrop-blur-sm"}/>
            {
                session ?
                    isAuthorized(session) ?
                        <TranslateServer lang={params.lang} text={'homepage_greeting'} variables={{name}}
                                         className={"px-10 py-5 text-xl text-center backdrop-blur-sm"}/>
                        :
                        <TranslateServer lang={params.lang} text={'homepage_contact_admin'} variables={{name}}
                                         className={"px-10 py-5 text-xl text-center backdrop-blur-sm"}/>
                    :
                    <TranslateServer lang={params.lang} text={'homepage_login_request'}
                                     className={"py-10 text-xl text-center backdrop-blur-sm"}/>
            }
        </div>
    );
}
