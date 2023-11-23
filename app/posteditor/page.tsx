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
      <div>HОВОСТИ</div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
      <button
        onClick={() => console.log(data)}
        className="border border-color-black w-[150px] h-[50px]"
      >
        console log content data
      </button>
      <p>Code - image name</p>
      <p>Link - file name</p>
    </div>
  );
}
