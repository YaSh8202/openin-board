import Sidebar from "@/components/Dashboard/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row p-10 bg-[#F5F5F5]">
      <Sidebar />
      <div className="flex flex-col flex-1"></div>
    </main>
  );
}
