import { getClaims } from "@/app/actions/claim";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ScrollUp from "@/components/common/ScrollUp";
import HandleClaim from "@/components/Handleclaim";
import { claimProps } from "@/types/Claims";
import moment from "moment";

const DashboardAdmin = async () => {
    const res = await getClaims();
    const claims: claimProps[] = res.claims;
    return (
        <>
            <div className="bg-gray-100 w-full flex-1 p-6 md:mt-16  w-10rem">
                <Breadcrumb pageName="Claims" />
                <div className=" mt-6 ">
                    <div className="card col-span-2 xl:col-span-1">
                        <div className="card-header">Recent Claims</div>
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-r"></th>
                                    <th className="px-4 py-2 border-r">Property Name</th>
                                    <th className="px-4 py-2 border-r">Customer Name</th>
                                    <th className="px-4 py-2 border-r">Message</th>
                                    <th className="px-4 py-2 border-r">Date</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                {
                                    claims.map((claim, index) => (
                                        <tr key={index}>
                                            <td className="border border-l-0 px-4 py-2 text-center text-green-500">{index + 1}</td>
                                            <td className="border border-l-0 px-4 py-2">{claim.property.name}</td>
                                            <td className="border border-l-0 px-4 py-2">{claim.user.name}</td>
                                            <td className="border border-l-0 px-4 py-2">{claim.message}</td>
                                            <td className="border border-l-0 px-4 py-2">{moment(claim.createdAt).calendar()}</td>
                                            <td className="border border-l-0 px-4 flex flex-col space-y-2 py-2">
                                                <a className="bg-teal-500 text-white p-2 rounded-xl" href={`/admin/properties/${claim.property._id}`}>View property</a>
                                                <HandleClaim claim={claim._id} />
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