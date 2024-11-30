import { getPurchases } from "@/app/actions/purchases";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ScrollUp from "@/components/common/ScrollUp";
import { PurchaseProps } from "@/types/PurchaseProps";
import moment from "moment";

const DashboardAdmin = async () => {
    const res = await getPurchases();
    const purchases: PurchaseProps[] = res.purchases;

    return (
        <>
            <div className="bg-gray-100 w-full flex-1 p-6 md:mt-16  w-10rem">
                <Breadcrumb pageName="Purchases" />
                <div className=" mt-6 ">
                    <div className="card col-span-2 xl:col-span-1">
                        <div className="card-header">Recent Purchases</div>

                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-r"></th>
                                    <th className="px-4 py-2 border-r">Property Name</th>
                                    <th className="px-4 py-2 border-r">Property Price</th>
                                    <th className="px-4 py-2 border-r">Customer Name</th>
                                    <th className="px-4 py-2 border-r">Transaction Date</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {
                                    purchases.map((purchase, index) => (
                                        <tr key={index}>
                                            <td className="border border-l-0 px-4 py-2 text-center text-green-500">{index + 1}</td>
                                            <td className="border border-l-0 px-4 py-2">{purchase.property.name}</td>
                                            <td className="border border-l-0 px-4 py-2">{purchase.property.cost}</td>
                                            <td className="border border-l-0 px-4 py-2">{purchase.user.name}</td>
                                            <td className="border border-l-0 px-4 py-2">{moment(purchase.createdAt).calendar()}</td>
                                            <td className="border border-l-0 px-4 py-2">
                                                <a className="bg-teal-500 text-white p-2 rounded-xl" href={`/admin/properties/${purchase.property._id}`}>View property</a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ScrollUp />
        </>
    );
}

export default DashboardAdmin;