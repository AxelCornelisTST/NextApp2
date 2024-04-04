import LaptopRepository from "@/common/repository/LaptopRepository";

export default async function InfoID({params}: { params: { id: string } }) {
    const laptop = await LaptopRepository.retrieveBy(params.id);
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <h1 className="flex items-center">Laptop Info</h1>

            <table className="border-separate border-spacing-2 border border-slate-500">
                <thead>
                <tr>
                    <th className="border border-slate-600 w-20">Info</th>
                    <th className="border border-slate-600 w-40">Laptop Specs</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-slate-700">s/n</td>
                    <td className="border border-slate-700">{laptop?.SerialNumber}</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">merk</td>
                    <td className="border border-slate-700">{laptop?.Brand}</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">model</td>
                    <td className="border border-slate-700">{laptop?.Model}</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">core</td>
                    <td className="border border-slate-700">{laptop?.Processor}</td>
                </tr>
                </tbody>
            </table>
        </main>
    )
}

