import Activities from "@/components/Dashboard/Activities";
import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import StatsCards from "@/components/Dashboard/StatsCards";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-row p-7 bg-[#F5F5F5] overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 pl-10 pr-5 gap-10 overflow-x-hidden overflow-y-auto ">
        <Navbar />
        <StatsCards />
        <Activities />
        <div className="flex flex-row gap-10">
          {/* <TopProducts /> */}
          {/* <Schedule /> */}
        </div>
      </div>
    </main>
  );
}
