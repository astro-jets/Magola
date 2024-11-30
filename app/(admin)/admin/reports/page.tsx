
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ScrollUp from "@/components/common/ScrollUp";
import { getReports } from "@/app/actions/action";
import PropertiesChart from "../dashboard/propertiesChart";
const DashboardAdmin = async () => {
    const res = await getReports();
    const properties = res.monthly;
    return (
        <>
            <div className="w-full flex-1 p-6 md:mt-16">
                <Breadcrumb pageName="Reports" />
                <PropertiesChart monthly={properties} />
                <ScrollUp />
            </div>
        </>
    );
}

export default DashboardAdmin;