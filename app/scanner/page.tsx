'use client'
import {useState} from "react";

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