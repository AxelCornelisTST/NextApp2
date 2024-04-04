"use client"
import FormScanner from "@/components/scanner";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";


export default function Info() {
    const [scanResult, setScanResult] = useState("");
    const [enabled, setEnabled] = useState(false);
    const [entity, setEntity] = useState<any>(null);
    const router = useRouter();

    function scannerCallBack(text: string) {
        setScanResult(text);
    }

    useEffect(() => {
        if (scanResult) {
            toggle();
            router.push('./info/' + scanResult);
        }
    }, [scanResult]);

    function toggle() {
        setEnabled(!enabled)
    }

    return (
        <div className="flex flex-col p-10 items-center">
            <h1>Laptop Info</h1>
            <FormScanner show={enabled} resultCallBack={scannerCallBack}/>
            <button
                onClick={toggle}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {enabled ? "Close" : "Scan"}
                </span>
            </button>
        </div>
    )
}