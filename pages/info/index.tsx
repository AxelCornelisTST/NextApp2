import LaptopRepository from "@/app/repository/LaptopRepository";
import laptopRepository from "@/app/repository/LaptopRepository";
import {ILaptop} from "@/app/models/ILaptop";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import FormScanner from "@/components/scanner";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

/**
 * getServerSideProps is a function that gets called every request (but only on the server!), and it can pass data to the page that you can then use for rendering.
 */
export const getServerSideProps = (async () => {

    const laptops = await LaptopRepository.retrieveAll();

    return {
        props: {
            laptops
        }
    };

}) satisfies GetServerSideProps<{ laptops: ILaptop[] }>

export default function Info({laptops}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <>
            <h1>Laptop Info</h1>
            <p>{scanResult}</p>
            <button onClick={toggle}>{enabled ? "Close" : "Scan"}</button>
            <FormScanner show={enabled} resultCallBack={scannerCallBack}/>
        </>
    )
}