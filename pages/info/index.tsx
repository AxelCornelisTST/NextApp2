import getAllLaptops from "@/app/data";
import {useState} from "react";

export default async function Info() {

    const [fetch, setFetch] = useState(getAllLaptops())

    return (
        <div>
            hi
            <div>
                {fetch}
            </div>
        </div>
    );
}