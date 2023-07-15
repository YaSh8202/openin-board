"use client";

import { ActivitiesData } from "@/types";
import { type ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    height: 270,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  colors: ["#E9A0A0", "#9BDD7C"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: ["smooth", "smooth"],
  },
  xaxis: {
    categories: ["Week1", "Week2", "Week3", "Week4"],
    labels: {
      style: {
        colors: "#858585",
      },
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    max: 500,
    min: 100,
    forceNiceScale: true,
    labels: {
      style: {
        colors: "#858585",
      },
    },
  },
  legend: {
    show: false,
  },
} satisfies ApexOptions;

function Activities({
  data: { guest_activities, months, user_activities },
}: {
  data: ActivitiesData;
}) {
  const [series, setSeries] = useState([
    {
      name: "Guest",
      data: guest_activities[0],
    },
    {
      name: "User",
      data: user_activities[0],
    },
  ]);

  return (
    <section className="bg-white py-[30px] px-10  rounded-[20px] ">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-lg">Activities</h4>
          <select
            onChange={(e) => {
              const month = e.target.value;
              const index = months.indexOf(month);
              setSeries([
                {
                  name: "Guest",
                  data: guest_activities[index],
                },
                {
                  name: "User",
                  data: user_activities[index],
                },
              ]);
            }}
            className=" border-none outline-none py-1 text-secondary text-sm"
          >
            {months.map((month, i) => (
              <option key={month}>{month}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E9A0A0] " />
            <p>Guest</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#9BDD7C] " />
            <p>User</p>
          </div>
        </div>
      </div>

      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={270}
        />
      </div>
    </section>
  );
}

export default Activities;
