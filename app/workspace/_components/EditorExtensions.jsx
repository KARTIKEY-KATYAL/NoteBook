import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Italic, Redo, Strikethrough, StrikethroughIcon, Subscript, Superscript, Underline, Undo } from "lucide-react";
import React from "react";

function EditorExtensions({ editor }) {
  if (!editor) return null; // ✅ Prevents rendering if editor is null

  return (
    <div className="p-5">
      <div className="button-group flex gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <Bold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <Italic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <Underline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <Subscript />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <Superscript />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <StrikethroughIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <AlignLeft/>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <AlignCenter/>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <AlignRight/>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive("italic") // ✅ Fixed incorrect reference
              ? "text-blue-950 font-extrabold"
              : "font-bold"
          }
        >
          <AlignJustify/>
        </button>
      </div>
    </div>
  );
}

export default EditorExtensions;
