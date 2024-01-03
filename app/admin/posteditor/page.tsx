// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ImageName } from "./Editor/customTools";

const Editor = dynamic(() => import("./Editor/Editor"), {
  ssr: false,
});
//https://arthttp.ru/api/images
async function getData() {
  const res = await fetch("/admin/api", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: "https://arthttp.ru/api/images",
    },
  });
  const response = await res.json();
  console.log(response);
}
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
      <button onClick={() => getData()}>get</button>
    </div>
  );
}
