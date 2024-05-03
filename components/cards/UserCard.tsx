"use client"
import {FunctionComponent, useEffect, useState} from "react";
import TranslateClient from "@/components/i18n/TranslateClient";
import {useFormState} from "react-dom";
import {changeUserRole} from "@/common/actions/upgradeUser";

const UserCard: FunctionComponent<{ lang: string, name: string, role: string, id: string }> = (props) => {
    const [stateRole, upgradeAction] = useFormState(changeUserRole, {message: ""});

    const [role, setRole] = useState(props.role)
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true)
        if (stateRole.role)
            setRole(stateRole.role)
        setTimeout(() => {
            setVisible(false)
        }, 2250)
    }, [stateRole])

    return (
        <div className="row-span-1 sm:row-span-2">
            <div
                className="relative group overflow-hidden p-8 pt-4 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                {
                    stateRole ?
                        stateRole.message === "ok" ?
                            <div
                                className={`animate-pulse text-center text-green-600 error backdrop-blur-sm bg-green-200 rounded border-green-950 border-1 ${visible ? "visible" : "hidden"}`}
                                role={"alert"}>
                                <TranslateClient lang={props.lang} text={"update_success"}/>
                            </div> :
                            <div
                                className={`animate-pulse text-center text-red-600 error backdrop-blur-sm bg-red-200 rounded border-red-950 border-1 ${visible ? "visible" : "hidden"}`}
                                role={"alert"}>
                                {
                                    stateRole.message
                                }
                            </div> : ""
                }

                <div className="pb-6 rounded-b-[--card-border-radius] grid grid-rows-2 grid-cols-2">
                    <TranslateClient lang={props.lang} text={"card_user"}/>
                    <p className="text-gray-700 dark:text-gray-300">
                        {
                            props.name
                        }
                    </p>
                    <TranslateClient lang={props.lang} text={"card_role"}/>
                    <p className="text-gray-700 dark:text-gray-300">
                        {
                            role
                        }
                    </p>
                </div>

                <div
                    className="flex flex-wrap gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800 items-center justify-center">
                    <form action={upgradeAction}>
                        <input type={"hidden"} name={"id"} id="id" value={props.id}></input>
                        <input type={"hidden"} name={"role"} id="role" value={role}></input>
                        <input type={"hidden"} name={"upgrade"} id="upgrade" value={"true"}></input>
                        <button
                            className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <TranslateClient lang={props.lang} text={"card_upgrade"}/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"/>
                            </svg>
                        </button>
                    </form>

                    <form action={upgradeAction}>
                        <input type={"hidden"} name={"id"} id="id" value={props.id}></input>
                        <input type={"hidden"} name={"role"} id="role" value={role}></input>
                        <input type={"hidden"} name={"upgrade"} id="upgrade" value={""}></input>
                        <button
                            className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                            <TranslateClient lang={props.lang} text={"card_downgrade"}/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserCard;