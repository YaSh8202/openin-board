import React from "react";
import {
  DashboardIcon,
  ScheduleIcon,
  SettingIcon,
  TransactionIcon,
  UserIcon,
} from "../Icons";
import Link from "next/link";

const sidebarLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: DashboardIcon,
    link: "/",
  },
  {
    id: 2,
    name: "Transactions",
    icon: TransactionIcon,
    link: "#",
  },
  {
    id: 3,
    name: "Schedules",
    icon: ScheduleIcon,
    link: "#",
  },
  {
    id: 4,
    name: "Users",
    icon: UserIcon,
    link: "#",
  },
  {
    id: 5,
    name: "Settings",
    icon: SettingIcon,
    link: "#",
  },
];

function Sidebar() {
  return (
    <aside className="py-[60px] px-[50px] w-[280px] flex flex-col bg-black text-white rounded-3xl ">
      <h3 className=" text-3xl font-bold mb-[60px]">Board.</h3>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col flex-1 gap-10">
          {sidebarLinks.map((link) => (
            <Link
              className="flex flex-row items-center gap-5"
              href={link.link}
              key={link.id}
            >
              <link.icon />
              <span className={`text-lg ${link.id === 1 ? "font-bold" : ""}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col text-sm gap-5 ">
          <Link className="" href="#">Help</Link>
          <Link href="#">Privacy</Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
