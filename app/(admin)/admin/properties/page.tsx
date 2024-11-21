import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import NewProperty from "@/components/NewProperty/page";

const DashboardAdmin = () => {
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
                                    <th className="px-4 py-2">Details</th>
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
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;