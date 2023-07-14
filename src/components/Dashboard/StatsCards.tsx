import React from "react";
import { LikesIcon, RevenueIcon, TransactionIcon, UsersIcon } from "../Icons";

const data = {
  revenue: commaSeparateNumber(2129430),
  transactions: 1520,
  likes: 9721,
  users: 892,
};

function commaSeparateNumber(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function StatsCards() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-[220px] bg-[#DDEFE0] p-5 rounded-[20px] ">
        <RevenueIcon className=" self-end" />
        <p className="text-sm">Total Revenues</p>
        <p className="font-bold text-2xl">${data.revenue}</p>
      </div>
      <div className="flex flex-col w-[220px] bg-[#F4ECDD] p-5 rounded-[20px] ">
        <TransactionIcon  className=" self-end text-black" />
        <p className="text-sm">Total Transactions</p>
        <p className="font-bold text-2xl">{data.transactions}</p>
      </div>
      <div className="flex flex-col w-[220px] bg-[#EFDADA] p-5 rounded-[20px] ">
        <LikesIcon className=" self-end" />
        <p className="text-sm">Total Likes</p>
        <p className="font-bold text-2xl">{data.likes}</p>
      </div>
      <div className="flex flex-col w-[220px] bg-[#DEE0EF] p-5 rounded-[20px] ">
        <UsersIcon className=" self-end" />
        <p className="text-sm">Total Users</p>
        <p className="font-bold text-2xl">{data.users}</p>
      </div>
    </div>
  );
}

export default StatsCards;
