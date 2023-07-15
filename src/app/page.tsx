import Activities from "@/components/Dashboard/Activities";
import Navbar from "@/components/Dashboard/Navbar";
import Schedule from "@/components/Dashboard/Schedule";
import Sidebar from "@/components/Dashboard/Sidebar";
import StatsCards from "@/components/Dashboard/StatsCards";
import TopProducts from "@/components/Dashboard/TopProducts";
import { ActivitiesData } from "@/types";


const getActivitiesData = async () => {
  const res = await fetch("http://localhost:3000/api/activities");
  const data = await res.json();
  return data as ActivitiesData;
};

export default async function Home() {
  const activitiesData = await getActivitiesData();

  return (
    <main className="flex min-h-screen w-screen flex-row p-7 bg-[#F5F5F5] overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 pl-10 pr-5 gap-10 overflow-x-hidden overflow-y-auto ">
        <Navbar />
        <StatsCards />
        <Activities data={activitiesData} />
        <div className="flex flex-row gap-10">
          <TopProducts />
          <Schedule />
        </div>
      </div>
    </main>
  );
}
