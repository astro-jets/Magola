"use client"

import { getURL } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { BsHouse, BsPieChart, BsPiggyBank } from "react-icons/bs";
import { GrDashboard } from "react-icons/gr";
type linksType = {
    name: string;
    url: string;
    logo: JSX.Element
}[]

const links: linksType = [
    {
        name: 'Dashboard',
        url: '/admin/dashboard',
        logo: <GrDashboard size={20} color="gray" />
    },
    {
        name: 'Properties',
        url: '/admin/properties',
        logo: <BsHouse size={20} color="gray" />
    },
    {
        name: 'Purchases',
        url: '/admin/purchases',
        logo: <BsPiggyBank size={20} color="gray" />
    },
    {
        name: 'Reports',
        url: '/admin/reports',
        logo: <BsPieChart size={20} color="gray" />
    }
]
const SideBar = () => {
    const url = getURL();
    return (
        <div className="h-full w-[20%] border-r pt-10 px-5 hidden md:block">
            <p className="text-lg font-bold mb-10  text-teal-600">Arnold Homes</p>

            {
                links.map(link => (
                    url === link.url ?
                        <a href={link.url} className="mt-4 p-2 bg-blue-200 rounded-lg text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-orange-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                {link.logo}
                            </svg>
                            {link.name}
                        </a> :
                        <a href={link.url} className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                {link.logo}
                            </svg>
                            {link.name}
                        </a>
                ))
            }
        </div>
    );
}

export default SideBar;