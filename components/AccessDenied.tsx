"use client"

import {FunctionComponent} from "react";
import TranslateClient from "@/components/i18n/TranslateClient";

const BackButton: FunctionComponent<{ lang: string }> = (props) => {
    return <TranslateClient lang={props.lang} text={'access_denied'}
                            className={"flex flex-col p-10 items-center font-bold text-xl text-red-700 error"}/>;
}

export default BackButton;