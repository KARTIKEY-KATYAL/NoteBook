"use client";
import { useState } from "react";
import { api } from "@/convex/_generated/api";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { Loader2Icon } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs"; // Adjust for your auth system

function UploadPdfDialog({ children }) {
  // Using Convex mutation hooks
  const generatePDFUploader = useMutation(api.fileStorage.generateUploadUrl);
  const insertFileEntry = useMutation(api.fileStorage.AddFileEntrytoDB);
  const getFileURLMutation = useMutation(api.fileStorage.getFileURL);

  const { user } = useUser(); // Authenticated user
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  // File selection function
  const onFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // Upload function
  const onUpload = async () => {
    if (!file) {
      alert("Please select a PDF file first.");
      return;
    }

    if (!fileName) {
      alert("Please enter a file name.");
      return;
    }

    if (!user) {
      alert("You must be logged in to upload a file.");
      return;
    }

    try {
      setLoading(true);

      // Call Convex mutation to get an upload URL
      const postUrl = await generatePDFUploader();
      console.log("Upload URL:", postUrl);

      if (!postUrl) {
        throw new Error("Failed to generate upload URL.");
      }

      // Upload the file
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!result.ok) {
        throw new Error(`Upload failed: ${result.statusText}`);
      }

      const { storageId } = await result.json();
      console.log("File uploaded successfully. Storage ID:", storageId);

      // Generate unique file ID
      const fileId = uuidv4();

      // Use the Convex hook to get the file URL
      const fileUrl = await getFileURLMutation({ storageId });

      // Insert file entry into DB
      await insertFileEntry({
        fileId: fileId,
        storageId: storageId,
        fileName: fileName, // Use the actual file name
        fileURL: fileUrl,
        createdBy: user.primaryEmailAddress.emailAddress, // Ensure user exists
      });

      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="font-bold">
        <DialogHeader>
          <DialogTitle>Select PDF to Upload</DialogTitle>
          <DialogDescription>
            <div>
              <div className="flex flex-col gap-2 rounded-md p-3 mt-5 border">
                Select Your File to Upload <br />
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={onFileSelect}
                />
              </div>
              <div className="mt-5 flex items-start flex-col">
                <label>File Name *</label>
                <Input
                  placeholder="File Name"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button
              type="button"
              className="bg-blue-900 font-bold text-white hover:bg-blue-900"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={onUpload}
            className="bg-green-500 font-bold text-white hover:bg-green-500"
            disabled={loading}
          >
            {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default UploadPdfDialog;
