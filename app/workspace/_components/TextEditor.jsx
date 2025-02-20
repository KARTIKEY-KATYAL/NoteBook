"use client";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import React from "react";
import EditorExtensions from "./EditorExtensions";

function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …", // ✅ Correctly configured here
      }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
  });

  return (
    <div className="bg-[#F6F7F8] text-black w-full items-center justify-center">
        <EditorExtensions editor={editor} />
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditor;
