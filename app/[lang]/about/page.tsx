import TranslateClient from "@/components/i18n/TranslateClient";

export default function About({params}: { params: { lang: string, id: string } }) {

    return (
        <div className="flex flex-col w-screen p-10 items-center">
            <TranslateClient lang={params.lang} text={"title_about"} className="font-bold text-xl"/>
            <div className={"pt-5 items-center justify-center flex flex-col"}>
                <div className={"font-bold"}>Website build by</div>
                <div className={"pb-2"}>Axel Cornelis</div>
                <div className={"font-bold"}>Supervisor</div>
                <div className={"pb-2"}>Robin Withofs</div>
                <div className={"font-bold pt-1"}> Talentenschool Turnhout 2024</div>
            </div>

        </div>
    );
}