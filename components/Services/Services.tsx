const Services = () => {
    return (
        <>

            {/* Services */}
            <div className="max-w-7xl px-4 lg:px-6 py-12 mx-auto">
                <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
                    <h1 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
                        Latest Listings
                    </h1>
                </div>

                {/* Card Grid */}
                <div className=" grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    {/* Card */}
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className=" max-h-70  h-70 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <img className="h-[98%] w-[98%] group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="/images/house.jpg"
                                alt="Blog Image" />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                3 Bedroom House
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Enjoy a revamped and dynamic approach to elegant lifestyle with this beautiful house.
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Discovery
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Brand Guidelines
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Yoga
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className="max-h-70  h-70 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <img
                                className="h-[98%] w-[98%] group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="/images/house1.jpg"
                                alt="Blog Image" />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                Nike React
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Rewriting sport's playbook for billions of athletes
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Brand Strategy
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Visual Identity
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className=" max-h-70  h-70 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                            <img className="h-[98%] w-[98%] group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="/images/house4.jpg"
                                alt="Blog Image" />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                Day Spa
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                Designing a new cocktail can
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Brand Strategy
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Visual Identity
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="group flex flex-col focus:outline-none" href="#">
                        <div className=" max-h-70  h-70 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">

                            <img className="h-[98%] w-[98%] group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                                src="/images/house3.jpg"
                                alt="Blog Image" />
                        </div>

                        <div className="pt-4">
                            <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
                                Diamond Dynamics
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                From cutting-edge equipment to stylish apparel
                            </p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Sports Gear
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Equipment
                                </span>
                                <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                    Discovery
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Card Grid */}

                <div className="mt-10 lg:mt-20 text-center">
                    <a className="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="#">
                        View all Work
                    </a>
                </div>
            </div>
            {/*End Services */}
        </>
    );
}

export default Services;