"use client"
import FormScanner from "@/components/FormScanner";
import {useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {laptopInfoPage} from "@/components/routerhelper";
import TranslateClient from "@/components/i18n/TranslateClient";
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
        if (scanResult)
            router.push(laptopInfoPage(scanResult))
    }

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