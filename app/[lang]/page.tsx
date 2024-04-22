"use server"
import TranslateServer from "@/components/TranslateServer";
import {getSessionName, isAuthorized} from "@/common/sessionhelper";
import {validateRequest} from "@/app/api/oauth/validateRequest";

export default async function Home({params}: { params: { lang: string } }) {
    const data = await validateRequest()
    const name: string = getSessionName(data);

    return (
        <div className="items-center flex flex-col justify-between h-max">
            <TranslateServer lang={params.lang} text={'app_title'}
                             className={"text-center py-10 font-bold text-4xl backdrop-blur-sm"}/>
            {
                data.session ?
                    isAuthorized(data) ?
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
