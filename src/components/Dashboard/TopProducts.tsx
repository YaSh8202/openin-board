"use client";

import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const months = [
  "Jan - Feb 2023",
  "Feb - Mar 2023",
  "March - April 2023",
  "Apr - May 2023",
  "May - June 2023",
  "June - July 2023",
];
const options = {
  chart: {
    width: 200,
    type: "pie",
  },
  colors: ["#E9A0A0", "#F9C851", "#9BDD7C"],
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
} satisfies ApexOptions;

const data = [
  {
    name: "Basic Tees",
    per: [55, 50, 45, 58, 60, 59],
    color: "#9BDD7C",
  },
  {
    name: "Custom Short Pants",
    per: [31, 41, 36, 26, 45, 48],
    color: "#F9C851",
  },
  {
    name: "Super Hoodies",
    per: [14, 9, 19, 16, 15, 13],
    color: "#E9A0A0",
  },
];

function TopProducts() {
  const [month, setMonth] = useState<number>(0);
  const [series, setSeries] = useState(
    data.map((item) => item.per[0]).reverse()
  );

  return (
    <section className="bg-white rounded-[20px] py-[30px] px-10 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-lg">Top Products</h4>
        <select
          onChange={(e) => {
            const index = months.indexOf(e.target.value);
            setMonth(index);
            setSeries(data.map((item) => item.per[index]).reverse());
          }}
          className=" border-none outline-none py-1 text-secondary text-sm"
        >
          {months.map((month, i) => (
            <option key={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className="flex mt-3 gap-4 ">
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="pie"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-5 mt-4 ">
          {data.map((item, i) => (
            <div key={i} className="flex flex-row items-start">
              <div
                style={{
                  backgroundColor: item.color,
                }}
                className="w-[11px] h-[11px] rounded-full mt-1 mr-2.5  "
              />
              <div className="flex flex-col items-start">
                <p className="text-sm font-bold ">{item.name}</p>
                <p className="text-xs text-secondary">{item.per[month]}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopProducts;
