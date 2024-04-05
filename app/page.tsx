'use client'


import Image from "next/image";

export default function Home() {

    return (
        <div className="items-center flex flex-col justify-between">
            <p className={"py-10 font-bold text-4xl"}>Welcome</p>
            <Image src={"/img.png"} alt={"laptop icon"} width={screen.width / 5} height={screen.width / 5}/>
            <p className={"py-10 text-xl text-center"}>Log in to start using our services</p>
        </div>
    );
}
