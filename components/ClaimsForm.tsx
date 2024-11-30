"use client"

import { useState } from "react";

import { useSession } from "next-auth/react";
// import SucessModal from "./SuccessModal";
import { useRouter } from "next/navigation";
import { PropertyProps } from "@/types/Properties";
import SucessModal from "./modals/SuccessModal";
import { newLease } from "@/app/actions/lease";
import { newClaim } from "@/app/actions/claim";


const ClaimsForm = ({ property, onClose }: { property: PropertyProps, onClose: () => void }) => {
    const { data: session, status } = useSession();
    if (!session?.user) { return }
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [msg, setMsg] = useState('');
    const router = useRouter();

    const handleClose = async () => {
        setIsLoading(false)
        setSuccess(false)
        router.push('/properties/');
    }

    const subscribe = async () => {
        setIsLoading(true)
        const res = await newClaim(msg, property._id as string, session?.user.id)
        if (res) {
            setSuccess(true)
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="relative z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-[#111111f1] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg min-w-[80rem]">
                            <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                                <div className="font-[sans-serif]  p-4">
                                    <div className="lg:max-w-7xl max-w-xl mx-auto">
                                        <div className="grid lg:grid-cols-3 gap-10">
                                            <div className="lg:col-span-2 max-lg:order-1">
                                                <form className="mt-16 min-w-[50rem]">
                                                    <h2 className="text-2xl font-extrabold text-white">Enter your message for {property.name}</h2>

                                                    <div className="grid gap-6 mt-8">
                                                        <textarea placeholder="Enter your claim message ..."
                                                            className="px-4 py-3.5 bg-white text-[#111] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                                                            value={msg}
                                                            onChange={(e) => {
                                                                setMsg(e.target.value)
                                                            }}
                                                        />

                                                    </div>
                                                    <div className="flex flex-wrap gap-4 mt-8">
                                                        <button onClick={onClose} type="button" className="min-w-[150px] px-6 py-3.5 bg-red-500 text-sm bg-primary-700 text-white rounded-md hover:bg-gray-200">Close</button>
                                                        {!isLoading ?
                                                            <button onClick={() => { subscribe() }} type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-primary text-white rounded-md hover:bg-[#111]">
                                                                Send Message
                                                            </button> :
                                                            <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-[#333] text-white rounded-md hover:bg-[#111]" disabled>
                                                                <span className="animate-spin inline-block size-7 border-[5px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                                                                Sending Message
                                                            </button>
                                                        }
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SucessModal
                isOpen={success}
                message={`Successfully filed a complaint for ${property.name}`}
                onClose={() => { handleClose() }}
                title="Successfull"
                url=""
            />
        </>

    );
}

export default ClaimsForm;