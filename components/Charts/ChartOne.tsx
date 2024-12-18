import { MonthlyReport } from "@/types/monthlyReport";
import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["blue", "#ff9d0a"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#fff",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["blue", "#ff9d0a"],
    strokeWidth: 4,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "2px",
      },
    },
    min: 0,
    max: 10,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne = ({ monthly }: { monthly: MonthlyReport }) => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "properties",
        data: [
          monthly[0].properties,
          monthly[1].properties,
          monthly[2].properties,
          monthly[3].properties,
          monthly[4].properties,
          monthly[5].properties,
          monthly[6].properties,
          monthly[7].properties,
          monthly[8].properties,
          monthly[9].properties,
          monthly[10].properties,
          monthly[11].properties,
        ],
      },

      {
        name: "Purchases",
        data: [
          monthly[0].Purchases,
          monthly[1].Purchases,
          monthly[2].Purchases,
          monthly[3].Purchases,
          monthly[4].Purchases,
          monthly[5].Purchases,
          monthly[6].Purchases,
          monthly[7].Purchases,
          monthly[8].Purchases,
          monthly[9].Purchases,
          monthly[10].Purchases,
          monthly[11].Purchases,
        ],
      },
    ],
  });

  // useEffect(()=>{
  //   for (let i = 0; i < monthly.length; i++) {
  //     const month = monthly[i];


  //   }

  // },[])

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-3xl border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default  sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#ff9d0a]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#ff9d0a]">properties Created</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#333]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#333] ">Properties Purchased</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
