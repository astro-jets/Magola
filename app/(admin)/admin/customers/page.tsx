import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DistrictsTable from "../../components/districts/districtsTable";
import NewDistrict from "../../components/districts/newDistrict";
import { getDistricts } from "@/app/actions/district";

const DashboardAdmin = async () => {
    const res = await getDistricts();
    const districts = res.districts;
    return (
        <>
            <div className="bg-gray-100 ml-[20%] flex-1 p-6 md:mt-16  w-10rem">
                <Breadcrumb pageName="Districts" />
                <div className=" mt-6 ">
                    <NewDistrict />
                    <div className="card col-span-2 xl:col-span-1">
                        <DistrictsTable districts={districts} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardAdmin;