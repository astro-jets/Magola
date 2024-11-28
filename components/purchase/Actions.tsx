"use client"

import { BsMegaphone } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
const PurchaseOptions = () => {
    return (
        <div className="w-full flex space-x-6">
            <button className="bg-primary w-1/3 flex items-center justify-between  mt-4 py-3 px-2 rounded-xl text-white"

            >
                <span>Apply for a Lease</span>
                <FaScaleUnbalanced size={30} color="#fff" />
            </button>
            <button className="bg-red-500 w-1/3 flex items-center justify-between  mt-4 py-3 px-2 rounded-xl text-white"

            >
                <span>Apply for a Complaint</span>
                <BsMegaphone size={30} color="#fff" />
            </button>
        </div>
    );
}

export default PurchaseOptions;