"use client"

import {FunctionComponent} from "react";
import {useRouter} from "next/navigation";
import TranslateClient from "@/components/i18n/TranslateClient";
import {signIn} from "next-auth/react";

const ButtonMicrosoft: FunctionComponent<{ lang: string }> = (props) => {
    const router = useRouter();
    return (
        <button
            onClick={() => signIn('azure-ad', {callbackUrl: "/"})}
            className=" py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="20" height="20" className={"mr-2"}>
                <defs>
                    <linearGradient id="a" x1="13.25" y1="13.02" x2="8.62" y2="4.25" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#1988d9"/>
                        <stop offset=".9" stopColor="#54aef0"/>
                    </linearGradient>
                    <linearGradient id="b" x1="11.26" y1="10.47" x2="14.46" y2="15.99" gradientUnits="userSpaceOnUse">
                        <stop offset=".1" stopColor="#54aef0"/>
                        <stop offset=".29" stopColor="#4fabee"/>
                        <stop offset=".51" stopColor="#41a2e9"/>
                        <stop offset=".74" stopColor="#2a93e0"/>
                        <stop offset=".88" stopColor="#1988d9"/>
                    </linearGradient>
                </defs>
                <path fill="#50e6ff" d="M1.01 10.19l7.92 5.14 8.06-5.16L18 11.35l-9.07 5.84L0 11.35l1.01-1.16z"/>
                <path fill="#fff" d="M1.61 9.53L8.93.81l7.47 8.73-7.47 4.72-7.32-4.73z"/>
                <path fill="#50e6ff" d="M8.93.81v13.45L1.61 9.53 8.93.81z"/>
                <path fill="url(#a)" d="M8.93.81v13.45l7.47-4.72L8.93.81z"/>
                <path fill="#53b1e0" d="M8.93 7.76l7.47 1.78-7.47 4.72v-6.5z"/>
                <path fill="#9cebff" d="M8.93 14.26L1.61 9.53l7.32-1.77v6.5z"/>
                <path fill="url(#b)" d="M8.93 17.19L18 11.35l-1.01-1.18-8.06 5.16v1.86z"/>
            </svg>
            <TranslateClient lang={props.lang} text={"button_azure"}/>
        </button>
    );
}

export default ButtonMicrosoft;