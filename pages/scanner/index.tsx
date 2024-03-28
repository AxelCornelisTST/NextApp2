'use client'
import {Scanner} from '@yudiel/react-qr-scanner'
import ClientOnly from "@/components/clientonly";
import {useState} from "react";
import FormScanner from "@/components/scanner";

const App = () => {
    const [result, setResult] = useState("");
    const [disabled, setDisabled] = useState(true);

    function callBack(text: string) {
        setResult(text);
    }

    function toggle() {
        setDisabled(!disabled)
    }

    return (
        <>
            {/*<FormScanner show={tog} resultCallBack={callBack}/>*/}
            <button onClick={toggle}>{disabled ? "Start" : "Stop"}</button>
        </>
    );
}

export default App