import Chart from "@/components/Charts/page";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ScrollUp from "@/components/common/ScrollUp";
const DashboardAdmin = () => {
    return (
        <>
            <div className="w-full flex-1 p-6 md:mt-16">
                <Breadcrumb pageName="Reports" />
                <Chart />
                <ScrollUp />
            </div>
        </>
    );
}

export default DashboardAdmin;