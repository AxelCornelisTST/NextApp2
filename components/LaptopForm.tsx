import {FunctionComponent} from "react";
import {ILaptop} from "@/common/models/ILaptop";
import {IUser} from "@/common/models/IUser";
import TranslateServer from "@/components/TranslateServer";

interface IParams {
    laptop: ILaptop,
    user: IUser | undefined,
    lang: string
}

const LaptopForm: FunctionComponent<IParams> = (params) => {

    return (
        <form className="max-w-md mx-auto">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" disabled={true}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder={" "} value={`${params.laptop.SerialNumber}`} required/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    <TranslateServer lang={params.lang} text={"laptop_serial_number"}/>
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" disabled={true}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder={" "} value={`${params.laptop.Brand}`} required/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    <TranslateServer lang={params.lang} text={"laptop_brand"}/>
                </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" disabled={true}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder={" "} value={`${params.laptop.Model}`} required/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    <TranslateServer lang={params.lang} text={"laptop_model"}/></label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" disabled={true}
                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder={" "} value={`${params.laptop.Processor}`} required/>
                <label htmlFor="floating_password"
                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    <TranslateServer lang={params.lang} text={"laptop_core"}/></label>
            </div>
            {
                params.user
                    ?
                    <>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_password" id="floating_password" disabled={false}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder={" "} value={`${params.user?.Name}`} required/>
                            <label htmlFor="floating_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <TranslateServer lang={params.lang} text={"user_name"}/></label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_password" id="floating_password" disabled={false}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder={" "} value={`${params.user?.FamilyName}`} required/>
                            <label htmlFor="floating_password"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                <TranslateServer lang={params.lang} text={"user_familyname"}/></label>
                        </div>
                    </>
                    :
                    <button type="button"
                            className="mb-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <TranslateServer lang={params.lang} text={"button_add_user"}/>
                    </button>
            }

            <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <TranslateServer lang={params.lang} text={"button_submit"}/>
            </button>
        </form>
    );
}

export default LaptopForm;