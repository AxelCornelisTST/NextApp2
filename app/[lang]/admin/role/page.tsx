"use client"
import AccessDenied from "@/components/AccessDenied";
import {SessionHelper} from "@/common/sessionhelper";
import {useSession} from "next-auth/react";

export default function Role({params}: { params: { lang: string, id: string } }) {
    const {data: session} = useSession();
    const userSession = new SessionHelper(session);

    if (!session || !userSession.isAdmin())
        return <AccessDenied lang={params.lang}/>

    return (
        <>

        </>
    );
}