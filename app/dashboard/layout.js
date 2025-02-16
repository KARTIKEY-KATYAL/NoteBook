import React from 'react'
import SideBar from './_components/SideBar'

function DashboardLayout({children}) {
  return (
    <div>
      <div className="md:w-64 fixed bg-[#011936] h-screen text-[#D66853]">
        <SideBar />
      </div>
      <div className="md:ml-64 bg-[#11151C] h-screen text-[#FDFFFC]">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout
