import React from 'react'
import Image from 'next/image'

function SideBar() {
  return (
    <div className="shadow-lg h-screen flex flex-col items-center rounded-md">
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
      <div></div>
    </div>
  );
}

export default SideBar
