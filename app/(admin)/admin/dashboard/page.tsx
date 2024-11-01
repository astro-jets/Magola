"use client"
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import { useSession } from "next-auth/react";
import { BsFolderFill, BsPeople, BsPersonStanding } from "react-icons/bs";
import { FaFolderPlus, FaRegFolderOpen, FaSearchengin } from "react-icons/fa";

const DashboardAdmin = () => {
    const { data: session, status } = useSession();
    if (!session?.user) { return }
    return (
        <>
            <div className=" flex-1 ml-[20%] self-end overflow-hidden max-w-[80%] p-6 md:mt-16">
                {/* General Report */}
                <div className="grid grid-cols-3 gap-6">

                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <FaFolderPlus color="#00757e" size={50} />
                                    <h1 className="text-3xl">4</h1>
                                </div>
                                <div className="mt-8">
                                    <p>New Cases</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <BsFolderFill color="#ff9900" size={50} />
                                    <h1 className="text-3xl">22</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Pending Cases</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <FaSearchengin color="#2d5740" size={50} />
                                    <h1 className="text-3xl">11</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Active Cases</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                </div>
                {/* End General Report */}
                {/* strat Analytics */}
                <div className="mt-6 grid grid-cols-2 gap-6 ">
                    {/* update section */}
                    <div className="card bg-teal-400 border-teal-400 rounded-3xl shadow-md text-white">
                        <div className="card-body flex flex-row">

                            {/* image */}
                            <div className="img-wrapper w-40 h-40 flex justify-center items-center">
                                <img src="/images/happy.svg" alt="img title" />
                            </div>
                            {/* end image */}

                            {/* info */}
                            <div className="py-2 ml-10">
                                <h1 className="h6">Welcome Back, {session.user.name}</h1>
                                <p className="text-white text-xs">You've contributed to solving 8 cases this week.</p>

                                <ul className="mt-4">
                                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Finish Dashboard Design</li>
                                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> Fix Issue #74</li>
                                    <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> Publish version 1.0.6</li>
                                </ul>
                            </div>
                            {/* end info */}

                        </div>
                    </div>
                    {/* end update section */}

                    {/* carts */}
                    <div className="flex flex-col">
                        {/* charts */}
                        <div className="grid grid-cols-2 gap-6 h-full">

                            <div className="card">
                                <div className="py-3 px-4 flex flex-row justify-between">
                                    <h1 className="h6 ">
                                        <span className="num-4">200</span>
                                        <p>Users</p>
                                    </h1>

                                    <div className="bg-teal-400 text-teal-700 border-teal-300 border w-10 h-10 rounded-full flex justify-center items-center">
                                        <BsPeople size={30} color="#fff" />
                                    </div>
                                </div>
                                <div className="analytics_1"></div>
                            </div>

                            <div className="card">
                                <div className="py-3 px-4 flex flex-row justify-between">
                                    <h1 className="h6">
                                        <span className="num-2">10</span>
                                        <p>Adminstrators</p>
                                    </h1>

                                    <div className="bg-indigo-200 text-indigo-700 border-indigo-300 border w-10 h-10 rounded-full flex justify-center items-center">
                                        <BsPersonStanding size={30} color="#fff" />
                                    </div>
                                </div>
                                <div className="analytics_1"></div>
                            </div>

                        </div>
                        {/* charts    */}

                    </div>
                    {/* end charts */}


                </div>
                {/* end Analytics */}

                <div className="w-full flex justify-between mt-6 py-6">
                    <div className="w-[68%]">
                        <ChartOne />
                    </div>
                    <div className="w-[30%]">
                        <ChartThree />
                    </div>
                </div>

                {/* start quick Info */}
                <div className="grid grid-cols-2 gap-6 mt-6 ">
                    {/* Browser Stats */}
                    <div className="card">
                        <div className="card-header">Browser Stats</div>

                        {/* brawser */}
                        <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                            <div className="flex items-center">
                                <i className="fab fa-chrome mr-4"></i>
                                <h1>google chrome</h1>
                            </div>
                            <div>
                                <span className="num-2"></span>%
                            </div>
                        </div>
                        {/* end brawser */}

                        {/* brawser */}
                        <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                            <div className="flex items-center">
                                <i className="fab fa-firefox mr-4"></i>
                                <h1>firefox</h1>
                            </div>
                            <div>
                                <span className="num-2"></span>%
                            </div>
                        </div>
                        {/* end brawser */}

                        {/* brawser */}
                        <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b">
                            <div className="flex items-center">
                                <i className="fab fa-internet-explorer mr-4"></i>
                                <h1>internet explorer</h1>
                            </div>
                            <div>
                                <span className="num-2"></span>%
                            </div>
                        </div>
                        {/* end brawser */}

                        {/* brawser */}
                        <div className="p-6 flex flex-row justify-between items-center text-gray-600 border-b-0">
                            <div className="flex items-center">
                                <i className="fab fa-safari mr-4"></i>
                                <h1>safari</h1>
                            </div>
                            <div>
                                <span className="num-2"></span>%
                            </div>
                        </div>
                        {/* end brawser */}

                    </div>
                    {/* end Browser Stats */}

                    {/* Start Recent Sales */}
                    <div className="card col-span-2 xl:col-span-1">
                        <div className="card-header">Recent Sales</div>

                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-r"></th>
                                    <th className="px-4 py-2 border-r">product</th>
                                    <th className="px-4 py-2 border-r">price</th>
                                    <th className="px-4 py-2">date</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">

                                <tr>
                                    <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 px-4 py-2">Lightning to USB-C Adapter Lightning.</td>
                                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 px-4 py-2">Apple iPhone 8.</td>
                                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 px-4 py-2">Apple MacBook Pro.</td>
                                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 px-4 py-2 text-center text-red-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 px-4 py-2">Samsung Galaxy S9.</td>
                                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 px-4 py-2 text-center text-yellow-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 px-4 py-2">Samsung Galaxy S8 256GB.</td>
                                    <td className="border border-l-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>
                                <tr>
                                    <td className="border border-l-0 border-b-0 px-4 py-2 text-center text-green-500"><i className="fad fa-circle"></i></td>
                                    <td className="border border-l-0 border-b-0 px-4 py-2">apple watch.</td>
                                    <td className="border border-l-0 border-b-0 px-4 py-2">$<span className="num-2"></span></td>
                                    <td className="border border-l-0 border-b-0 border-r-0 px-4 py-2"><span className="num-2"></span> minutes ago</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    {/* End Recent Sales */}


                </div>
                {/* end quick Info */}
            </div>
        </>
    );
}

export default DashboardAdmin;