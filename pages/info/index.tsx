import LaptopRepository from "@/app/repository/LaptopRepository";
import {ILaptop} from "@/app/models/ILaptop";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";

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

    return (
        <div>
            {
                laptops.map((laps, index) =>
                    <div key={index}>
                        <p>{index}</p>
                        <p>{laps.SerialNumber}</p>
                        <p>{laps.Brand}</p>
                        <p>{laps.Model}</p>
                        <p>{laps.Processor}</p>
                    </div>
                )
            }
        </div>
    );
}