import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const AddFileEntrytoDB = mutation({
  args: {
    fileId: v.string(),
    storageId: v.string(),
    fileName: v.string(),
    fileURL: v.string(), // ✅ Add this field to match your schema
    createdBy: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db.insert("fileUrl", {
      fileId: args.fileId,
      storageId: args.storageId,
      fileName: args.fileName,
      fileURL: args.fileURL, // ✅ Make sure to insert it here
      createdBy: args.createdBy,
    });
    return result; // Returning the inserted document ID
  },
});


export const getFileURL = mutation({
  args:{
    storageId:v.string()
  },
  handler:async(ctx,args)=>{
    const url = await ctx.storage.getUrl(args.storageId)
    return url
  }
})