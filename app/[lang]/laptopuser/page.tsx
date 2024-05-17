"use client"
import {useParams, useRouter} from "next/navigation";
import {useFormState, useFormStatus} from 'react-dom'
import {laptopInfoPage, userInfoPage} from "@/components/routerhelper";
import TranslateClient from "@/components/i18n/TranslateClient";
import {useSession} from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import {userInfo} from "node:os";
import {findLaptopUserAction} from "@/common/actions/searchLaptopUsers";
import {findUserAction} from "@/common/actions/searchUsers";
import UserCard from "@/components/cards/UserCard";

export default function Lookup() {
    const {pending} = useFormStatus()
    const router = useRouter();
    const params = useParams<{ lang: string }>()
    const {data: session} = useSession();
    const [userLookupForm, searchLaptopUser] = useFormState(findLaptopUserAction, {message: "", prevText: ""});

    const userSession = new SessionHelper(session);
    if (!userSession.isAuthorized())
        return <AccessDenied lang={params.lang}/>

    return (
        <div className="flex flex-col w-screen p-10 items-center">
            <TranslateClient lang={params.lang} text={"title_user"} className="font-bold text-xl"/>

            <form className="w-screen max-w-screen-md px-5 pt-10"
                  action={searchLaptopUser}
                  onSubmit={event => {
                      event.preventDefault();
                      //router.push(userInfoPage((event.currentTarget.elements[0] as HTMLInputElement).value))
                  }}>
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

            <div className={"flex flex-col"}>
                {
                    getObject(userLookupForm.message).map(value => {
                        return (
                            <form key={value.userID} action={updateLaptop} id={formUserLookup}>
                                <input type={"hidden"} name={"laptopid"} id="laptopid"
                                       value={props.laptop.sn}/>
                                <input type={"hidden"} name={"userid"} id="userid"
                                       value={value.userID}/>

                                <button type={"submit"}
                                        className={"hover:border-slate-500 m-1 py-2 border-2 border-blue-700 rounded-md px-4 flex flex-wrap items-center"}>
                                    {
                                        value.firstName + " " + value.familyName
                                    }
                                    <svg
                                        className="w-[30px] h-[30px] text-gray-800 dark:text-white ml-5"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
                                    </svg>
                                </button>
                            </form>
                        )
                    })
                }
            </div>


        </div>
    )
}