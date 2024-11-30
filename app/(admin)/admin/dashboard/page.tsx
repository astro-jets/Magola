import { getAdminStats, getReports } from "@/app/actions/action";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import ChartThree from "@/components/Charts/ChartThree";
import { BiDollar } from "react-icons/bi";
import { BsHouses, BsPeople, } from "react-icons/bs";
import { PiHandshake } from "react-icons/pi";
import PropertiesChart from "./propertiesChart";

const DashboardAdmin = async () => {
    const res = await getAdminStats();
    const stats = res.stats;
    const res2 = await getReports();
    const properties = res2.monthly;
    // console.log(reports)
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
                                    <h1 className="text-3xl">{stats.properties}</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Properties Created</p>
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
                                    <h1 className="text-3xl">{stats.revenue.toLocaleString()}</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Property Revenue</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                    <div className="report-card">
                        <div className="card">
                            <div className="card-body flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <PiHandshake color="#2d5740" size={50} />
                                    <h1 className="text-3xl">{stats.purchases}</h1>
                                </div>
                                <div className="mt-8">
                                    <p>Purchases</p>
                                </div>

                            </div>
                        </div>
                        <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
                    </div>
                </div>
                {/* End General Report */}

                {/* strat Analytics */}
                <div className="w-full flex justify-between mt-6 py-6">
                    <div className="w-full">
                        <PropertiesChart monthly={properties} />
                    </div>
                    {/* <div className="w-[30%]"> */}
                    {/* <ChartThree /> */}
                    {/* </div> */}
                </div>
                {/* end Analytics */}
            </div>
        </>
    );
}

export default DashboardAdmin;