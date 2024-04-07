"use client"

import {FunctionComponent} from "react";
import TranslateClient from "@/components/TranslateClient";

const BackButton: FunctionComponent<{ lang: string }> = (props) => {
    return (
        <div>
            return <TranslateClient lang={props.lang} text={'access_denied'}
                                    className={"flex flex-col p-10 items-center font-bold text-xl text-red-700 error"}/>
        </div>
    );
}

export default BackButton;