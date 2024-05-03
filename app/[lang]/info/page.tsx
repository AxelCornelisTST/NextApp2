"use client"
import TranslateClient from "@/components/i18n/TranslateClient";
import {useRouter} from "next/navigation";
import {lookupPage} from "@/components/routerhelper";

export default function Page({params}: { params: { lang: string, id: string } }) {
    const router = useRouter();
    router.push(lookupPage().replace("/$lang", "."))
    return <div className="flex flex-col justify-between p-10 items-center">
        <TranslateClient lang={params.lang} text={'title_info'} className={"font-bold text-xl pd-20"}/>
    </div>
}