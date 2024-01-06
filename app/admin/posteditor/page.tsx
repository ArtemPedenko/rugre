// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ImageName } from "./Editor/customTools";

const Editor = dynamic(() => import("./Editor/Editor"), {
  ssr: false,
});
//https://arthttp.ru/api/images
async function getData(body: any) {
  const res = await fetch("/admin/api", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: "https://arthttp.ru/api/posts",
      case: "post",
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
}
export default function PageEditor() {
  const [data, setData] = useState();
  const [date, setDate] = useState("");

  return (
    <div>
      <div className="flex gap-2 max-w-[650px] h-[40px] mx-auto items-center">
        Date:
        <input
          placeholder={"enter date of post"}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <Editor data={data} onChange={setData} holder="editorjs-container" />
      <button
        onClick={() => console.log({ date: date, content: data })}
        className="border border-color-black w-[150px] h-[50px]"
      >
        console log content data
      </button>
      <button onClick={() => getData({ date: date, content: data })}>
        get
      </button>
    </div>
  );
}
