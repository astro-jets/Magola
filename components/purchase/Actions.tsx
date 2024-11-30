"use client"

import { useState } from "react";
import { BsMegaphone } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import LeaseForm from "../LeaseForm";
import { PropertyProps } from "@/types/Properties";
import ClaimsForm from "../ClaimsForm";
const PurchaseOptions = ({ property }: { property: PropertyProps }) => {
    const [showLease, setShowLease] = useState(false);
    const [showClaim, setShowClaim] = useState(false);
    return (
        <>
            <div className="w-full flex space-x-6">
                <button className="bg-blue-500 w-1/3 flex items-center justify-between  mt-4 py-3 px-2 rounded-xl text-white"
                    onClick={() => { setShowLease(true) }}

                >
                    <span>Apply for a Lease</span>
                    <FaScaleUnbalanced size={30} color="#fff" />
                </button>
                <button className="bg-red-500 w-1/3 flex items-center justify-between  mt-4 py-3 px-2 rounded-xl text-white"
                    onClick={() => { setShowClaim(true) }}
                >
                    <span>Apply for a Complaint</span>
                    <BsMegaphone size={30} color="#fff" />
                </button>
            </div>
            {showLease && <LeaseForm property={property} onClose={() => { setShowLease(false) }} />}
            {showClaim && <ClaimsForm property={property} onClose={() => { setShowClaim(false) }} />}

        </>
    );
}

export default PurchaseOptions;