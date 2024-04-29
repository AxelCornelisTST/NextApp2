"use client"

import {FunctionComponent} from "react";
import {useRouter} from "next/navigation";
import TranslateClient from "@/components/TranslateClient";
import {param} from "ts-interface-checker";

const ClientButton: FunctionComponent<{ lang: string, route: string, text: string }> = (props) => {
    const router = useRouter();
    return (
        <button onClick={event => router.push(props.route)}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <TranslateClient lang={props.lang} text={props.text}
                             className={"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"}/>
        </button>
    );
}

export default ClientButton;