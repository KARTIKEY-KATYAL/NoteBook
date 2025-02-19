import { ConvexVectorStore } from "@langchain/community/vectorstores/convex";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { action } from "./_generated/server.js";
import { TaskType } from "@google/generative-ai"
import { v } from "convex/values"

export const ingest = action({
  args: {
    textSplitter:v.any(),
    fileId:v.any()
  },
  handler: async (ctx,args) => {
    await ConvexVectorStore.fromTexts(
      args.textSplitter,//Array
      args.fileId,//String
      new GoogleGenerativeAIEmbeddings({
        apiKey: "AIzaSyALo4JdwA83-49_TYGz601ooGlewCXrBNU",
        modelName: "embedding-001", // 768 dimensions
        taskType: TaskType.RETRIEVAL_DOCUMENT,
        title: "Document title",
      }),
      { ctx },

    );
    return "Completed..."
  },
});
