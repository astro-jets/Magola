"use client";

import { usePathname } from "next/navigation";
import { BsBell, BsDoorOpen, BsHouses, BsPieChart, BsPiggyBank } from "react-icons/bs";
import { FaHands } from "react-icons/fa";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";

type linksType = {
    name: string;
    url: string;
    logo: JSX.Element;
}[];

const links: linksType = [
    {
        name: "Dashboard",
        url: "/admin/dashboard",
        logo: <GrDashboard size={20} color="gray" />,
    },
    {
        name: "Properties",
        url: "/admin/properties",
        logo: <BsHouses size={20} color="gray" />,
    },
    {
        name: "Purchases",
        url: "/admin/purchases",
        logo: <BsPiggyBank size={20} color="gray" />,
    },
    {
        name: "Claims",
        url: "/admin/claims",
        logo: <FaHands size={20} color="gray" />,
    },
    {
        name: "Lease",
        url: "/admin/lease",
        logo: <FaScaleUnbalanced size={20} color="gray" />,
    },
    {
        name: "Reports",
        url: "/admin/reports",
        logo: <BsPieChart size={20} color="gray" />,
    },
];

const SideBar = () => {
    const pathname = usePathname();

    // Helper to determine if a link is active
    const isActive = (linkUrl: string) => pathname.startsWith(linkUrl);

    return (
        <div className="h-full w-[20%] border-r pt-10 px-5 hidden md:block">
            <p className="text-lg font-bold mb-10 text-teal-600">Arnold Homes</p>

            {links.map((link) => (
                <a
                    key={link.url}
                    href={link.url}
                    className={`mt-8 p-2 rounded-lg text-sm font-medium group cursor-pointer flex items-center ${isActive(link.url)
                        ? "bg-blue-200 text-slate-500 hover:text-blue-500"
                        : "text-slate-500 hover:text-blue-500"
                        }`}
                >
                    <span className={`h-5 mr-4 group-hover:stroke-blue-500 ${isActive(link.url) ? "stroke-orange-400" : "stroke-slate-400"}`}>
                        {link.logo}
                    </span>
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default SideBar;
