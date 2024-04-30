"use client"
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import TranslateClient from "@/components/TranslateClient";
import {useSession} from "next-auth/react";
import {useFormState, useFormStatus} from "react-dom";
import {findUserAction} from "@/common/actions/searchUsers";

export default function Role({params}: { params: { lang: string, id: string } }) {
    const {pending} = useFormStatus()
    const {data: session} = useSession();
    const userSession = new SessionHelper(session);
    const [state, formAction] = useFormState(findUserAction, {message: ""});

    if (!session || !userSession.isAdmin())
        return <AccessDenied lang={params.lang}/>

    return (
        <div className="flex flex-col justify-between p-10 items-center">
            <TranslateClient lang={params.lang} text={'title_roles'} className={"font-bold text-xl pd-20"}/>
            <form className="w-screen max-w-screen-md px-5 pt-10" action={formAction}>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" name={"search"} id="search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search..." required/>
                    <button
                        disabled={pending}
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                    </button>
                </div>
            </form>
            {
                state.message
            }
        </div>
    );
}