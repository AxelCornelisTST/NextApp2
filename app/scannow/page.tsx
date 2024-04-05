"use client"
import FormScanner from "@/components/scanner";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {infoPage} from "@/components/routerhelper";


export default function Scannow() {
    const [scanResult, setScanResult] = useState("");
    const router = useRouter();

    function scannerCallBack(text: string) {
        setScanResult(text);
    }

    useEffect(() => {
        if (scanResult)
            router.push(infoPage(scanResult));

    }, [scanResult])

    return (
        <div className="flex flex-col p-10 items-center">
            <h1 className="font-bold text-xl">Scan Laptop Barcode</h1>
            <p className={`${scanResult ? "" : "py-20"}font-mono font-bold`}>{scanResult}</p>
            <FormScanner show={!scanResult} resultCallBack={scannerCallBack} toggleLoader={false}/>
        </div>
    )
}