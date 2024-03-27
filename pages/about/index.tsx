import QRScanner from 'qr-scanner';
import {useState} from "react";

export default function About() {

    const [running, setRunning] = useState(false);
    let videoElement: HTMLVideoElement = (document.getElementById('video-source') as HTMLVideoElement);

    function update() {

    }

    function toggle() {
        setRunning(!running)
    }

    return (
        <div>
            <video id="video-source" className="rounded-s shadow-m"></video>
            <button onClick={toggle}></button>
        </div>

    );
}