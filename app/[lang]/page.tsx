"use server"
import TranslateServer from "@/components/TranslateServer";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {SessionHelper} from "@/common/sessionhelper";

export default async function Home({params}: { params: { lang: string } }) {
    const session = await getServerSession(authOptions)
    const userSession = new SessionHelper(session);
    return (
        <div className="items-center flex flex-col justify-between h-max">
            <TranslateServer lang={params.lang} text={'app_title'}
                             className={"text-center py-10 font-bold text-4xl backdrop-blur-sm"}/>
            {
                userSession.loggedIn ?
                    userSession.isAuthorized() ?
                        <TranslateServer lang={params.lang} text={'homepage_greeting'}
                                         variables={{name: userSession.getSessionName()}}
                                         className={"px-10 py-5 text-xl text-center backdrop-blur-sm"}/>
                        :
                        <TranslateServer lang={params.lang} text={'homepage_contact_admin'}
                                         variables={{name: userSession.getSessionName()}}
                                         className={"px-10 py-5 text-xl text-center backdrop-blur-sm"}/>
                    :
                    <TranslateServer lang={params.lang} text={'homepage_login_request'}
                                     className={"py-10 text-xl text-center backdrop-blur-sm"}/>
            }
        </div>
    );
}
