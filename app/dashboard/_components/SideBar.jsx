import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

function SideBar() {
  return (
    <div className="shadow-lg h-screen flex flex-col items-center rounded-md relative">
      <div className="flex gap-3 text-3xl items-center bg-[#F64740] ubuntu-bold font-bold text-white w-full py-2 px-3">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        NoteBook
      </div>
      <div className="w-full flex flex-col items-center">
        <Button
          className="text-2xl font-bold bg-green-950 mt-6 hover:bg-green-800 text-white px-9 py-6 transition-shadow w-full cursor-pointer"
          aria-label="Upload PDF"
        >
          + Upload PDF
        </Button>
        <div className="flex flex-col mt-6 w-full rounded-lg items-center justify-start">
          <div className="flex gap-2 hover:bg-emerald-300 items-center px-5 py-3 justify-center mt-4 mb-2 w-[95%] text-lg text-white hover:text-blue-950 font-semibold rounded-xl cursor-pointer">
            <Layout />
            <h2 className="hover:scale-105 transition-colors">WorkSpace</h2>
          </div>
          <div className="flex gap-2 hover:bg-emerald-300 items-center px-5 py-3 justify-center mt-2 mb-2 w-[95%] text-lg text-white hover:text-blue-950 font-semibold rounded-xl cursor-pointer">
            <Shield />
            <h2 className="hover:scale-105 transition-colors">Upgrade</h2>
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col items-center gap-2 bottom-20 w-[90%] px-3 text-white">
        <Progress value={40} className="bg-red-700" />
        <p>2 out of 5 Credits used</p>
        <p className="text-yellow-400 text-sm">Upgrade for Extra Credits</p>
      </div>
    </div>
  );
}

export default SideBar;
