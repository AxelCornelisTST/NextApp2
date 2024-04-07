"use client"
import FormScanner from "@/components/scanner";
import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {infoPage} from "@/components/routerhelper";
import TranslateClient from "@/components/TranslateClient";


export default function Scannow() {
    const [scanResult, setScanResult] = useState("");
    const router = useRouter();
    const params = useParams<{ lang: string }>()

    function scannerCallBack(text: string) {
        setScanResult(text);
    }

    useEffect(() => {
        if (scanResult)
            router.push(infoPage(scanResult));

    }, [scanResult])

    return (
        <div className="flex flex-col p-10 items-center">
            <TranslateClient lang={params.lang} text={'title_scan'} className={"font-bold text-xl"}/>
            <p className={`${scanResult ? "" : "py-20"}font-mono font-bold`}>{scanResult}</p>
            <FormScanner show={!scanResult} resultCallBack={scannerCallBack} toggleLoader={false}/>
        </div>
    )
}