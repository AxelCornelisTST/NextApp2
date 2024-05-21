"use client"
import {useParams, useRouter} from "next/navigation";
import {useFormState, useFormStatus} from 'react-dom'
import TranslateClient from "@/components/i18n/TranslateClient";
import {useSession} from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import {findLaptopUserWithDevicesAction} from "@/common/actions/searchLaptopUsers";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import LaptopUserCard from "@/components/cards/LaptopUserCard";

export default function Lookup() {
    const {pending} = useFormStatus()
    const router = useRouter();
    const params = useParams<{ lang: string }>()
    const {data: session} = useSession();
    const [userLookupForm, searchLaptopUser] = useFormState(findLaptopUserWithDevicesAction, {
        message: "",
        prevText: ""
    });

    const userSession = new SessionHelper(session);
    if (!userSession.isAuthorized())
        return <AccessDenied lang={params.lang}/>

    function getObject(message: string): LaptopUserEntity[] {
        let result: LaptopUserEntity[] = []
        if (message) {
            result = JSON.parse(message);
        }
        return result;
    }

    return (
        <div className="flex flex-col w-screen p-10 items-center">
            <TranslateClient lang={params.lang} text={"title_user"} className="font-bold text-xl"/>

            <form className="w-screen max-w-screen-md px-5 pt-10 mb-20"
                  action={searchLaptopUser}>
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

            <div className={`grid grid-cols-1 gap-2 backdrop-blur-sm pb-5`}>
                {
                    getObject(userLookupForm.message).map((user, index) => {
                        return (
                            <LaptopUserCard lang={params.lang} name={user.firstName + " " + user.familyName}
                                            klas={user.klas} id={user.userID} laptops={user.laptop} key={user.userID}/>
                        )
                    })
                }
            </div>
        </div>
    )
}