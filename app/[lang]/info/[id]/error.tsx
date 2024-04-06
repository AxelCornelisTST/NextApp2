"use client"
import BackButton from "@/components/BackButton";
import TranslateClient from "@/components/TranslateClient";
import {useParams, useSearchParams} from "next/navigation";

export default function EntryNotFound() {
    const params = useParams<{ lang: string }>()
    return (
        <div className="items-center flex flex-col p-10 justify-between">
            <TranslateClient lang={params.lang} text={"connection_failed"} className={"text-red-600 text-center"}/>
            <BackButton/>
        </div>
    );
}