import {FunctionComponent, useEffect, useState} from "react";
import ClientOnly from "@/components/clientonly";
import {Scanner} from "@yudiel/react-qr-scanner";
import scanner from "@/pages/scanner";

interface Props {
    show: boolean,
    resultCallBack: (text: string) => void
}

const FormScanner: FunctionComponent<Props> = ({show, resultCallBack}) => {
    const [error, setError] = useState("");
    return (
        <>
            <p className={"error"}>{error}</p>
            {
                show ?
                    <ClientOnly>
                        <Scanner
                            onResult={text => {
                                resultCallBack(text)
                                show = false;
                            }}
                            onError={error => {
                                console.log(error)
                                setError("Failed to open scanner");
                            }}
                            options={{
                                constraints: {
                                    facingMode: "environment",
                                    height: {max: 740, min: 144, ideal: 1080},
                                    width: {max: 740, min: 144, ideal: 1920}
                                }
                            }}
                            styles={{video: {}}}
                            enabled={show}
                            components={{
                                audio: false,
                                tracker: true
                            }}
                        /></ClientOnly>
                    : <></>
            }
        </>
    )
}

export default FormScanner;