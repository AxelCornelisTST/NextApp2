"use client"
import {FunctionComponent} from "react";
import TranslateClient from "@/components/i18n/TranslateClient";
import {LaptopEntity} from "@/common/models/ILaptop";
import {laptopInfoPage, lookupPage} from "@/common/routerhelper";

const UserCard: FunctionComponent<{
    lang: string,
    name: string,
    klas: string,
    id: number,
    laptops: LaptopEntity[]
}> = (props) => {

    return (
        <div className="row-span-1 sm:row-span-2">
            <div
                className="relative group overflow-hidden p-8 pt-4 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">

                <div
                    className="pb-6 rounded-b-[--card-border-radius] grid grid-rows-2 grid-cols-2 gap-y-2 items-center justify-center">
                    <TranslateClient lang={props.lang} text={"card_user"}/>
                    <p className="text-gray-700 dark:text-gray-300">
                        {
                            props.name
                        }
                    </p>
                    <TranslateClient lang={props.lang} text={"card_klas"}/>
                    <p className="text-gray-700 dark:text-gray-300">
                        {
                            props.klas
                        }
                    </p>
                    <TranslateClient lang={props.lang} text={"owned_pcs"}/>
                    <div className={"space-y-2"}>{
                        props.laptops ?
                            props.laptops.map((value, index) => {
                                return (
                                    <div
                                        className={"flex flex-col border-2 border-slate-500 rounded-xl justify-center items-center"}
                                        key={value.serialNumber}>
                                        <a href={laptopInfoPage(value.serialNumber)}>{value.serialNumber}</a>
                                    </div>
                                )
                            }) : <>none</>
                    }</div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;