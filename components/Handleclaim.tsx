"use client"

import { useState } from "react";

import { useRouter } from "next/navigation";
import SucessModal from "./modals/SuccessModal";
import { updateClaim } from "@/app/actions/claim";


const HandleClaim = ({ claim }: { claim: string }) => {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [success, setSuccess] = useState(false);
    const [claimStatus, setClaimStatus] = useState('');

    const router = useRouter();

    const handleClose = async () => {
        setIsLoading(false)
        setSuccess(false)
        router.push('/admin/claims/');
    }

    const updateClaimFunction = async (status: string) => {
        setClaimStatus(status)
        setIsLoading(true)
        const res = await updateClaim(claim, status);
        if (res) {
            setSuccess(true)
            setIsLoading(false)
        }
    }

    return (
        <>
            {
                isLoading ?
                    < button disabled className="bg-[#646262] text-white p-2 rounded-xl"
                        onClick={() => { updateClaimFunction('accepted') }}
                    >
                        <span className="animate-spin inline-block size-7 border-[5px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span>
                    </button >
                    :
                    <>
                        <button className="bg-cyan-500 text-white p-2 rounded-xl"
                            onClick={() => { updateClaimFunction('accepted') }}
                        >

                            Accept Claim
                        </button>
                        <button className="bg-red-600 text-white p-2 rounded-xl"
                            onClick={() => { updateClaimFunction('rejected') }}
                        >

                            Reject Claim
                        </button>
                        <SucessModal
                            isOpen={success}
                            message={`Successfully ${claimStatus} the complaint.`}
                            onClose={() => { handleClose() }}
                            title="Successfull"
                            url=""
                        />
                    </>
            }
        </>

    );
}

export default HandleClaim;