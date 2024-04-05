"use server"
import LaptopRepository from "@/common/repository/LaptopRepository";
import LaptopForm from "@/components/LaptopForm";
import UserRepository from "@/common/repository/UserRepository";
import {IUser} from "@/common/models/IUser";
import BackButton from "@/components/backbutton";

export default async function InfoID({params}: { params: { id: string } }) {
    const laptop = await LaptopRepository.retrieveBy(params.id);
    let user: IUser | undefined
    if (laptop)
        user = await UserRepository.retrieveBy(laptop.UserID);

    return (
        <div className="flex flex-col items-center justify-between p-10">
            <h1 className="flex items-center font-bold text-xl">Laptop Info</h1>
            {
                laptop
                    ? <LaptopForm laptop={laptop} user={user}/>
                    : <div className={"flex flex-col items-center"}>
                        <p className={"error font-bold text-red-700 py-10 text-center"}>Laptop {params.id} does not exist in
                            the database </p>
                        <BackButton/>
                    </div>
            }

        </div>
    )
}

