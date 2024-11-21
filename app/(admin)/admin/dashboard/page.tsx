"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartOne from "@/components/Charts/ChartOne";
import ChartThree from "@/components/Charts/ChartThree";
import { BiDollar } from "react-icons/bi";
// import { useSession } from "next-auth/react";
import { BsFolderFill, BsHouses, BsPeople, BsPersonStanding, BsPiggyBank } from "react-icons/bs";
import { FaFolderPlus, FaRegFolderOpen, FaSearchengin } from "react-icons/fa";

const DashboardAdmin = () => {

    return (
        <>
            <div className=" self-end overflow-hidden w-full p-6 md:mt-16">
                <Breadcrumb
                    pageName="dashboard"
                />
                {/* General Report */}
                <div className="grid grid-cols-3 gap-6">

                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <BsHouses color="#00757e" size={50} />
                                    <h1 className="text-3xl">420</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Properties</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <BiDollar color="#ff9900" size={50} />
                                    <h1 className="text-3xl">22</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Purchases</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <BsPeople color="#2d5740" size={50} />
                                    <h1 className="text-3xl">848</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Customers</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                </div>
                {/* End General Report */}

                {/* strat Analytics */}
                <div className="w-full flex justify-between mt-6 py-6">
                    <div className="w-[68%]">
                        <ChartOne />
                    </div>
                    <div className="w-[30%]">
                        <ChartThree />
                    </div>
                </div>
                {/* end Analytics */}

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