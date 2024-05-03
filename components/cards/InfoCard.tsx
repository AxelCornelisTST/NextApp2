"use client"
import {FunctionComponent, useEffect, useState} from "react";
import {useFormState} from "react-dom";
import {findLaptopUserAction} from "@/common/actions/searchLaptopUsers";
import {LaptopUserEntity} from "@/common/models/ILaptopUser";
import {removeUserAction, updateLaptopAction} from "@/common/actions/linkLaptop";
import AcceptModal from "@/components/AcceptModel";

const InfoCard: FunctionComponent<{
    lang: string,
    laptop: { sn: string, model: string, brand: string, details: string },
    user: { name: string, famName: string, klas: string, id: number } | undefined
}> = (props) => {
    //find any and all users based on enduser input
    const [userLookupForm, searchLaptopUser] = useFormState(findLaptopUserAction, {message: "", prevText: ""});
    //set user to a laptop
    const [userSelectForm, updateLaptop] = useFormState(updateLaptopAction, props.user);
    const [userRemoveForm, removeUser] = useFormState(removeUserAction, "");

    const formSearchId = "form_search";
    const formUserLookup = "form_user_lookup";
    const [isOpen, setOpen] = useState(false);

    function getObject(message: string): LaptopUserEntity[] {
        let result: LaptopUserEntity[] = []
        if (message) {
            result = JSON.parse(message);
        }
        return result;
    }

    const [user, setUser] = useState(props.user)
    useEffect(() => {
        userLookupForm.message = "";
        userLookupForm.prevText = "";

        setUser(userSelectForm)
    }, [userSelectForm])
    useEffect(() => {
        if (userRemoveForm === "success")
            setUser(undefined)
    }, [userRemoveForm])

    return (
        <div className={"sm:px-10 py-10"}>
            {
                user ? //cant show modal if there's no user
                    <form action={removeUser} id={"modal_form"}>
                        <input type={"hidden"} name={"laptopid"} id="laptopid" value={props.laptop.sn}/>
                        <input type={"hidden"} name={"userid"} id="userid" value={user.id}/>
                        <AcceptModal open={isOpen} onClose={() => setOpen(false)}
                                     formRef={"modal_form"}/>
                    </form> : <></>
            }

            <div className="row-span-1 sm:row-span-2">
                <div
                    className="relative group overflow-hidden p-8 pt-4 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                    <div className="rounded-b-[--card-border-radius] grid grid-rows-2 grid-cols-2 gap-y-5 sm:w-72">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/>
                        </svg>
                        <div>
                            <p className="text-gray-700 dark:text-gray-300 xl2 font-bold">
                                {
                                    props.laptop.sn
                                }
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                {
                                    props.laptop.brand + " "
                                }
                                {
                                    props.laptop.model
                                }
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-xs">
                                {
                                    props.laptop.details
                                }
                            </p>
                        </div>
                        {
                            user ?
                                <>
                                    <button onClick={() => setOpen(true)} type="button" data-modal-target="static-modal"
                                            data-modal-toggle="static-modal">
                                        <svg
                                            className="w-[30px] h-[30px] text-gray-800 dark:text-white border rounded border-gray-100 hover:text-gray-500 hover:border-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                    </button>
                                </>


                                :
                                <button type={"submit"}
                                        form={formSearchId}>
                                    <svg
                                        className="w-[30px] h-[30px] text-gray-800 dark:text-white border-b rounded border-gray-100 hover:text-gray-500 hover:border-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2"
                                              d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                </button>
                        }

                        <form id={formSearchId} action={searchLaptopUser}
                              className={`flex flex-col fill-none text-white bg-transparent `}>
                            {
                                user ?
                                    <>
                                        <div className={"text-gray-700 dark:text-gray-300 xl2 font-bold"}>
                                            {
                                                user.name + " " + user.famName
                                            }
                                        </div>
                                        <div className={"text-xs"}>
                                            {
                                                user.klas
                                            }
                                        </div>
                                    </>
                                    :
                                    <input name={"search"} id="search" placeholder={"user name"} type={"search"}
                                           className="w-28 block py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                            }
                        </form>
                    </div>
                    <div
                        className="flex flex-wrap gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800 items-center justify-center">
                        <div className={"flex flex-col"}>
                            {
                                getObject(userLookupForm.message).map(value => {
                                    return (
                                        <form key={value.userID} action={updateLaptop} id={formUserLookup}>
                                            <input type={"hidden"} name={"laptopid"} id="laptopid"
                                                   value={props.laptop.sn}/>
                                            <input type={"hidden"} name={"userid"} id="userid" value={value.userID}/>

                                            <button type={"submit"}
                                                    className={"hover:border-slate-500 m-1 py-2 border-2 border-blue-700 rounded-md px-4 flex flex-wrap items-center"}>
                                                {
                                                    value.firstName + " " + value.familyName
                                                }
                                                <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white ml-5"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                     height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round"
                                                          strokeLinejoin="round"
                                                          strokeWidth="2"
                                                          d="M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z"/>
                                                </svg>
                                            </button>
                                        </form>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;