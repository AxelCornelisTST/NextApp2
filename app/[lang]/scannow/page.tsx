"use client"
import FormScanner from "@/components/FormScanner";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {infoPage} from "@/components/routerhelper";
import TranslateClient from "@/components/TranslateClient";
import {useSession} from "next-auth/react";
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";


export default function Scannow() {
    const [scanResult, setScanResult] = useState("");
    const router = useRouter();
    const params = useParams<{ lang: string }>()
    const {data: session} = useSession();
    const userSession = new SessionHelper(session);

    function scannerCallBack(text: string) {
        setScanResult(text);
    }

    useEffect(() => {
        if (scanResult)
            router.push(infoPage(scanResult));

    }, [scanResult])

    if (!userSession.isAuthorized())
        return <AccessDenied lang={params.lang}/>

    return (
        <div className="flex flex-col p-10 items-center">
            <TranslateClient lang={params.lang} text={'title_scan'} className={"font-bold text-xl"}/>
            <p className={`${scanResult ? "" : "py-20"}font-mono font-bold`}>{scanResult}</p>
            <FormScanner show={!scanResult} resultCallBack={scannerCallBack} toggleLoader={false}/>
        </div>
    )
}