"use client"

import { useState } from "react";
import Player from "../player/Player";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const pages = ["home", "services", "about", "contacts"];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activePage, setActivePage] = useState('home');
    const router = useRouter();

    const routeTo = (page: string) => {
        setActivePage(page);
        if (page == 'home') { router.push('/') }
        else { router.push(`/${page}`) }
    }

    return (
        <>
            <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
                <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto">
                    <div className="md:col-span-3">
                        {/* Logo */}
                        <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Preline">
                            <img src="/images/logo.webp" className="w-full h-12 max-h-15 overflow-hidden object-cover" />
                        </a>
                        {/* End Logo */}
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:hover:bg-white/10 dark:text-white dark:hover:text-white dark:focus:text-white">
                            Sign in
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-primary text-black hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none">
                            Sign Up
                        </button>

                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" x2="21" y1="6" y2="6"></line>
                                    <line x1="3" x2="21" y1="12" y2="12"></line>
                                    <line x1="3" x2="21" y1="18" y2="18"></line>
                                </svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* End Button Group */}

                    {/* Collapse */}
                    <div id="hs-navbar-hcail" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6" aria-labelledby="hs-navbar-hcail-collapse">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                            {
                                pages.map(page => (
                                    <div className="cursor-pointer">
                                        <p
                                            className={`relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 dark:text-white ${page == activePage ? `before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400` : ``}`}
                                            onClick={() => { routeTo(page) }}
                                        >{
                                                page.toLocaleUpperCase()}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </nav>
            </header>
        </>
    );
}

export default Header;