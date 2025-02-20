import React from 'react'

function PdfViewer({ fileURL }) {
  console.log(fileURL);

  return (
    <div className="flex flex-col justify-center items-center bg-[#011936] font-bold">
      PdfViewer
      <iframe src={fileURL} width="100%" height="90vh" className="h-[90vh]" />
    </div>
  );
}

export default PdfViewer
PdfViewer