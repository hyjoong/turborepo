"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./editor.css";

export const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: "padding-left: 50px; padding-right: 50px",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
    },
    extensions: [StarterKit],
    content: "",
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[820px] py-5 mx-auto print:py-0 print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
