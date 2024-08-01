import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import AverageCard from "../components/card/AverageCard";
import { FaCalendarAlt } from "react-icons/fa";
import { PiChartPieSliceFill } from "react-icons/pi";
import { GoQuestion } from "react-icons/go";
import { calculateChatCost } from "../utils";

// Mock API call function (replace this with your actual API call)
const fetchChatHistory = async () => {
  // Replace with actual API call
  return [
    { date: "24 July", count: 0 },
    { date: "25 July", count: 0 },
    { date: "26 July", count: 5 },
    { date: "27 July", count: 0 },
    { date: "28 July", count: 0 },
    { date: "29 July", count: 0 },
    { date: "30 July", count: 0 },
  ];
};

const Overview = () => {
  const [cost, setCost] = useState(0);
  const [options, setOptions] = useState({
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
    xaxis: {
      categories: [],
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
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Chats",
      data: [],
      color: "#1A56DB",
    },
  ]);

  const [mean, setMean] = useState(0);

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  useEffect(() => {
    const getChatData = async () => {
      const chatData = await fetchChatHistory();
      setCost(calculateChatCost(chatData));
      const categories = chatData.map((item) => item.date);
      const data = chatData.map((item) => item.count);

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories: categories,
        },
      }));

      setSeries([
        {
          name: "Chats",
          data: data,
          color: "#1A56DB",
        },
      ]);

      const total = data.reduce((sum, value) => sum + value, 0);
      const meanValue = total / data.length;
      setMean(meanValue);
    };

    getChatData();
  }, []);

  return (
    <div className="h-auto bg-background p-4 body">
      <div className="flex gap-5 w-[100%] ">
        <div className="flex justify-between w-[70%]">
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
                  <PiChartPieSliceFill
                    size={20}
                    className="text-sm rotate-90"
                  />
                  <span className="whitespace-nowrap">Select Workflow</span>
                </button>
              </div>
            </div>
            <div className="max-w-4xl w-full bg-cardbackground rounded-lg shadow p-4 md:p-6">
              <div
                className="w-full flex justify-end items-center gap-2 relative"
                style={{ top: "-6%" }}
              >
                {isBoxVisible && (
                  <div className="absolute bg-white text-black p-2 rounded shadow-md">
                    Running Beta Version (Dummy Cost)
                  </div>
                )}
              </div>
              <div className="w-full flex justify-end items-center gap-2">
                <h3 className=" text-white">Workflow Cost</h3>
                <h3 className="text-green-400">0.000000{cost}</h3>
                <GoQuestion
                  onClick={toggleBoxVisibility}
                  className="cursor-pointer"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                    {mean.toFixed(2)}
                  </h5>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Average Chats
                  </p>
                </div>
                <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                  {series[0].data.reduce((sum, value) => sum + value, 0)}
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
                  series={series}
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
                  > Last 7 days
                    
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
