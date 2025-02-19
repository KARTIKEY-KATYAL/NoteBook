import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

// const PdfURL =
//   "https://academic-tern-552.convex.cloud/api/storage/d207c031-34f2-43d3-b1b4-66fa13a572cc";
export async function GET(req) {

  const reqURL = req.url;
  const {searchParams} = new URL(reqURL)
  const PdfURL = searchParams.get("PdfURL");
  console.log(PdfURL);
  
    // 1. Load the pdf
    const response = await fetch(PdfURL)
    const data = await response.blob();
    const loader = new WebPDFLoader(data)
    const docs = await loader.load()

    let pdfTextContent = ''
    docs.forEach(doc=>{
        pdfTextContent = pdfTextContent + doc.pageContent
    })

    // 2. Split the Text into Smaller Chunks
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 20,
    });
    const output = await textSplitter.createDocuments([pdfTextContent]);

    let spitterList = []

    output.forEach(doc=>{
        spitterList.push(doc.pageContent)
    })

    return NextResponse.json({ result: spitterList });
}