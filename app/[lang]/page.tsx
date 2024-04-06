"use server"
import Image from "next/image";
import TranslateServer from "@/components/TranslateServer";

export default async function Home({params}: { params: { lang: string } }) {

    return (
        <div className="items-center flex flex-col justify-between">
            <TranslateServer lang={params.lang} text={'welcome'} className={"py-10 font-bold text-4xl"}/>
            <Image src={"/img.png"} alt={"laptop icon"} width={512} height={512} className={"w-fit"}/>
            <TranslateServer lang={params.lang} text={'homepage_login_request'}
                             className={"py-10 text-xl text-center"}/>
        </div>
    );
}
