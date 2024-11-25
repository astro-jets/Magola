import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NewProperty from "@/components/NewProperty/page";
import { getProperties } from "@/app/actions/properties";
import { PropertyProps } from "@/types/Properties";
import { FaCircle } from "react-icons/fa";
import moment from "moment";

const DashboardAdmin = async () => {
    const res = await getProperties();
    const properties: PropertyProps[] = res.propertysOBJ;
    console.log("Properties => ", properties)
    return (
        <>
            <div className="bg-gray-100 w-full flex-1 p-6 md:mt-16  w-10rem">
                <Breadcrumb pageName="Properties" />
                <div className="py-8">
                    <NewProperty />
                </div>
                <div className=" mt-6 ">
                    <div className="card col-span-2 xl:col-span-1">
                        <div className="card-header">Recent Properties</div>

                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-r"></th>
                                    <th className="px-4 py-2 border-r">Name</th>
                                    <th className="px-4 py-2 border-r">Price</th>
                                    <th className="px-4 py-2">Created on</th>
                                    <th className="px-4 py-2">categories</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">

                                {
                                    properties.map((property, index) => (
                                        <tr key={index}>
                                            <td className="border border-l-0 px-4 py-2 text-center text-green-500">
                                                <p>{index + 1}</p>
                                            </td>
                                            <td className="border border-l-0 px-4 py-2">{property.name}</td>
                                            <td className="border border-l-0 px-4 py-2">$<span className="num-2">{property.cost}</span></td>
                                            <td className="border border-l-0 border-r-0 px-4 py-2">
                                                <span className="num-2"></span>
                                                {moment(property.createdAt).calendar()}
                                            </td>
                                            <td className="border border-l-0 border-r-0 px-4 py-2">{
                                                property.tags?.map((tag, index) => (
                                                    <span key={index} className="num-2">{tag + ", "}</span>
                                                ))}
                                            </td>
                                            <td className="border border-l-0 px-4 py-2">
                                                <a href={`/admin/properties/${property._id}`} className="cursor-pointer text-center py-2 px-4 rounded-2xl bg-teal-500 text-white">VIEW</a>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;