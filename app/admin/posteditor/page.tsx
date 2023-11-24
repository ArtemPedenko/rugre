// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("./Editor/Editor"), {
  ssr: false,
});

export default function PageEditor() {
  const [data, setData] = useState();
  return (
    <div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
      <button
        onClick={() => console.log(data)}
        className="border border-color-black w-[150px] h-[50px]"
      >
        console log content data
      </button>
    </div>
  );
}
