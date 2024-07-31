import React from "react";
import ApexCharts from "react-apexcharts";
import AverageCard from "../components/card/AverageCard";
import ChatHistoryTable from "../components/table/ChatHistoryTable";
import TaskHistory from "../components/overview/TaskHistory";
import { FaCalendarAlt, FaDatabase, FaFileAlt } from "react-icons/fa";

import { CiHome } from "react-icons/ci";
import { PiChartPieSliceFill, PiChartPieSliceLight } from "react-icons/pi";

const Overview = () => {
  const options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "Workflows executed",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "#1A56DB",
      },
    ],
    xaxis: {
      categories: [
        "24 July",
        "25 July",
        "26 July",
        "27 July",
        "28 July",
        "29 July",
        "30 July",
      ],
      labels: {
        show: true,
        style: {
          colors: "#fff",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      categories: [
        "24 July",
        "25 July",
        "26 July",
        "27 July",
        "28 July",
        "29 July",
        "30 July",
      ],
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
  };

  return (
    <div className="h-auto bg-background p-4 body">
      {/* Other components */}
      <div className="flex gap-5 w-[100%] ">
        <div className="flex justify-between w-[70%]  ">
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-5 w-full">
              <div className="flex flex-col">
                <h2 className="text-3xl mb-4 font-bold flex items-center gap-2">
                  Overview
                </h2>
                
              </div>
              <div className="flex h-10 gap-2">
                <button className="flex items-center gap-2 rounded-md bg-black bg-opacity-50 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900">
                  <FaCalendarAlt className="text-sm" />
                  <span className="whitespace-nowrap">Select Date</span>
                </button>
                <button className="flex items-center gap-2 rounded-md bg-black bg-opacity-50 px-4 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-900">
                  <PiChartPieSliceFill size={20} className="text-sm rotate-90" />
                  <span className="whitespace-nowrap">
                    Select Workflow 
                  </span>
                </button>
              </div>
            </div>
            <div className="max-w-4xl w-full bg-cardbackground rounded-lg shadow  p-4 md:p-6">
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                    0
                  </h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Workflows executed
                  </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  0%
                  <svg
                    className="w-3 h-3 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13V1m0 0L1 5m4-4 4 4"
                    />
                  </svg>
                </div>
              </div>
              <div style={{ height: "200px", width: "100%" }}>
                <ApexCharts
                  options={options}
                  series={options.series}
                  type="area"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                    type="button"
                  > last 7 days
                    <svg
                      className="w-2.5 m-2.5 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="lastDaysdropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Yesterday
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 7 days
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 30 days
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 90 days
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                  >
                    Monitor Workflows
                    <svg
                      className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[30%]">
          <AverageCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
