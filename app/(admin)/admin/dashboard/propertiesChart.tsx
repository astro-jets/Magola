"use client"
import ChartOne from "@/components/Charts/ChartOne";

const PropertiesChart = ({ monthly }: { monthly: any }) => {
    return (
        <ChartOne monthly={monthly} />
    );
}

export default PropertiesChart;