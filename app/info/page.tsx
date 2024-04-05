"use client"
import {useRouter} from "next/navigation";
import {homePage} from "@/components/routerhelper";


export default function Info() {
    const router = useRouter();
    return router.push(homePage());
}