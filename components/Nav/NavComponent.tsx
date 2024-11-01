"use client"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { BsDoorOpen, BsMegaphone, BsPersonCircle } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
type notificationProps = {
    _id: string,
    title: string,
    description: string
}[]
const NavComponent = ({ notifications }: { notifications: notificationProps }) => {
    const { data: session, status } = useSession()
    const [profileState, setProfileState] = useState(false)
    const [open, setOpen] = useState(false);

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary text-sm py-4 dark:bg-gray-800">
            <nav className="max-w-[85rem] flex justify-between space-x-20 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between min-w-40">
                    <a className="inline-flex items-center gap-x-2 text-2xl font-semibold text-white" href="#">
                        Report It
                        <BsMegaphone color="#fff" size={30} />
                    </a>
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                    </div>
                </div>

                <div id="navbar-image-and-text-1" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                        <a className="font-medium text-white hover:text-gray-400" href="/" aria-current="page">Home</a>
                        <a className="font-medium text-white hover:text-gray-400 " href="/services">Services</a>
                        <a className="font-medium text-white hover:text-gray-400 " href="/about">About</a>
                        <a className="font-medium text-white hover:text-gray-400 " href="/faqs">Faqs</a>
                        <a className="font-medium text-white hover:text-gray-400 " href="/contacts">Contacts</a>
                    </div>
                </div>


                {
                    session?.user ?
                        <div className="flex space-x-6">
                            <Link href={'/dashboard'} className="bg-white hover:scale-110 text-center shadow-lg w-35 text-black rounded-lg p-3">
                                Dashboard
                            </Link>
                            <button className="bg-white shadow-lg w-35 text-black rounded-lg p-3"
                                onClick={() => { signOut }}>
                                Log Out
                            </button>
                        </div> :
                        <button className="bg-white shadow-lg w-35 text-black rounded-lg p-3">
                            Log In
                        </button>
                }
            </nav>
        </header>
    );
};

export default NavComponent;

const ListItem = ({ children, NavLink }: { NavLink: string; children: any }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
