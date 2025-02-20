import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs';

function WorkspaceHeader() {
  return (
    <div className="bg-[#1C5D99] flex w-full justify-between shadow-lg">
      <div className="flex gap-3 text-3xl items-center bg-[#F64740] ubuntu-bold font-bold text-white rounded-md py-2 px-3 w-fit">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        NoteBook
      </div>
      <UserButton/>
    </div>
  );
}

export default WorkspaceHeader
