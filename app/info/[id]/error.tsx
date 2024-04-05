"use client"
import {useRouter} from "next/navigation";
import {scanPage} from "@/components/routerhelper";
import BackButton from "@/components/backbutton";

export default function EntryNotFound() {
    const router = useRouter();

    function scannow() {
        router.push(scanPage());
    }

    return (
        <div className="items-center flex flex-col p-10 justify-between">
            <p className={"text-red-600 text-center"}>The connection to the database failed</p>
            <BackButton/>
        </div>
    );
}