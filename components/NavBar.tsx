"use client"
import React, {FunctionComponent, useState} from "react";
import {NavigationRegistry} from "@/common/registry/NavigationRegistry";
import Link from "next/link";
import TranslateClient from "@/components/TranslateClient";
import {useSession} from "next-auth/react";
import {SessionHelper} from "@/common/sessionhelper";

const NavBar: FunctionComponent<{ lang: string }> = (props) => {

        const [isHidden, setHidden] = useState(true);
        const {data: session, update: update} = useSession()
        const userSession = new SessionHelper(session);

        const onClick = () => {
            setHidden(!isHidden);
        }

        return (
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEz2AILsAIzsAIzsAIzsAIzsAIzsAIvsAIzsAIzsAIwhq+IlquElquEkquFBmdclquElquElquElquElquHsAIwlquElquHsts12AAAAGHRSTlMADofd//WdGU5kMR1rgkEHzv+f+ei4uVdQyHBuAAAAq0lEQVR4Ac1OBRLDMAxzMZyU+/+fLkrtMRyvKthnnYD+hKpu2rbr1TtOtwzznmPYF7KDprIYzTthn6eF9Dm2zjeNpZHF+eBjKmTPTWRxw1gwJVb2QmqKo2B2XFaKVa7cl+Ofj1xTmb5dacM1EgVMX6TrEa+qhFvADvGWp1lJUBIdNkhnesAOkn6SEze6g+M+kvmIhQWl7U7PvrPP1ZOfX1whSVcPRx/hHJ0PF/GECxazqOV6AAAAAElFTkSuQmCC"
                            className="h-8" alt="Flowbite Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Laptop Inventory</span>
                    </a>
                    <button onClick={onClick} data-collapse-toggle="navbar-default" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`${isHidden ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                NavigationRegistry.values.map(value => {
                                    let name = value.nameCallback(userSession.user?.role, userSession.loggedIn);
                                    let route = value.routeCallback(userSession.user?.role, userSession.loggedIn)?.replace("$lang", props.lang);
                                    //empty name skips link
                                    return name ? <Link
                                        onClick={onClick}
                                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        key={route}
                                        href={`${route}`}>
                                        <TranslateClient lang={props.lang} text={name}/>
                                    </Link> : undefined
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
;

export default NavBar;