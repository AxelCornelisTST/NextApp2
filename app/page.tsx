'use client'

import {useUser} from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
    const {user, error, isLoading} = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        <div className="items-center flex flex-col p-10 justify-between">

            {
                user ?
                    <div className={"items-center flex flex-col"}>
                        <img src={user.picture ? user.picture : ""} alt={"profile picture"}/>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                    :
                    <a href="/api/auth/login"
                       className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                 <span
                                     className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                      Log In
                                 </span>
                    </a>
            }
        </div>
    );
}
