import React from "react";
import { RightArrowIcon } from "../Icons";

function Schedule() {
  return (
    <section className="bg-white rounded-[20px] py-[30px] px-10 flex-1">
      <div className="flex items-center justify-between">
        <h4 className="font-bold text-lg">Top Products</h4>
        <div className="flex items-center text-secondary gap-2 ">
          <p className="text-xs">See All</p>
          <RightArrowIcon />
        </div>
      </div>
      <div className="flex flex-col mt-6 gap-3">
        <div className="flex flex-col gap-[5px] border-l-[5px] border-light-green pl-4 py-1">
          <p className="font-bold text-[#666666] text-sm">
            Meeting with suppliers from Kuta Bali
          </p>
          <p className="text-[#999999] text-xs">14.00-15.00</p>
          <p className="text-[#999999] text-xs">at Sunset Road, Kuta, Bali </p>
        </div>
        <div className="flex flex-col gap-[5px] border-l-[5px] border-[#6972C3] pl-4 py-1">
          <p className="font-bold text-[#666666] text-sm">
          Check operation at Giga Factory 1
          </p>
          <p className="text-[#999999] text-xs">18.00-20.00</p>
          <p className="text-[#999999] text-xs">at Central Jakarta </p>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
