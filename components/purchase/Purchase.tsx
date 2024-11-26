"use client"

import { PropertyProps } from "@/types/Properties";
import { useState } from "react";
import { BiSolidChevronRight } from "react-icons/bi";
import Paywall from "../Paywall";

const PurchaseComponent = ({ property }: { property: PropertyProps }) => {
    const [showPay, setShowPay] = useState(false)
    return (
        <>
            {showPay ? <Paywall onClose={() => setShowPay(false)} property={property} /> :
                <button className="bg-primary flex items-center justify-between w-3/4 mt-4 py-3 px-2 rounded-xl text-white"
                    onClick={() => { setShowPay(true) }}
                >
                    <span>Purchase Property</span>
                    <BiSolidChevronRight size={30} color="#fff" />
                </button>
            }
        </>
    );
}

export default PurchaseComponent;