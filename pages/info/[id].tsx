import LaptopRepository from "@/app/repository/LaptopRepository";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import {ILaptop} from "@/app/models/ILaptop";
import laptopRepository from "@/app/repository/LaptopRepository";

export const getServerSideProps = (async (context) => {
    const id = context.params?.id?.toString() || "";
    const laptop = await LaptopRepository.retrieveBy(id);
    return {
        props: {
            laptop: laptop || null
        }
    }

}) satisfies GetServerSideProps<{ laptop: ILaptop | null }>

export default function InfoID({laptop}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <h1>Laptop Info</h1>
            <table className="border-separate border-spacing-2 border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600">State</th>
                    <th className="border border-slate-600">City</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-slate-700">Indiana</td>
                    <td className="border border-slate-700">Indianapolis</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Ohio</td>
                    <td className="border border-slate-700">Columbus</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Michigan</td>
                    <td className="border border-slate-700">Detroit</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

// <div>{laptop?.SerialNumber}</div>
// <div>{laptop?.Brand}</div>
// <div>{laptop?.Model}</div>
// <div>{laptop?.Processor}</div>