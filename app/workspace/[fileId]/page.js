"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader';
import PdfViewer from '../_components/PdfViewer';
import TextEditor from '../_components/TextEditor';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useEffect } from 'react';

function Workspace() {
    const {fileId} = useParams();
    const FileInfo = useQuery(api.fileStorage.getFileRecord, {
      fileId: fileId,
    });

    useEffect(() => {
      console.log("File info is",FileInfo);      
    }, [FileInfo])
    

  return (
    <div>
      <WorkspaceHeader/>
      <div className='grid grid-cols-2 gap-5 w-full '>
        <div>
            {/* TextEditor */}
            <TextEditor/>
        </div>
        <div>
            {/* PdfViewer */}
            <PdfViewer fileURL={FileInfo?.fileURL}/>
        </div>
      </div>
    </div>
  )
}

export default Workspace
