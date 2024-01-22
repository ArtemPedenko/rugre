// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Preview from "./components/Preview";

const Editor = dynamic(() => import("../Editor/Editor"), {
  ssr: false,
});

export default function PageEditor({ params }: { params: { slug: string } }) {
  const [data, setData] = useState();
  const [date, setDate] = useState("");

  //const [view, setView] = useState();

  useEffect(() => {
    if (params.slug[0] !== "newpost") {
      getData(params.slug).then((result) => {
        console.log(result);
        setDate(result.date);
        setData(result.content);
        //setView({ date: result.date, content: result.content.blocks });
        return result;
      });
    }
  }, []);

  return (
    <>
      <div>
        <div className="flex gap-2 max-w-[650px] h-[40px] mx-auto items-center">
          Date:
          <input
            placeholder={"enter date of post"}
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        {data && params.slug[0] !== "newpost" ? (
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        ) : null}
        {params.slug[0] === "newpost" ? (
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        ) : null}

        {/* <button
          onClick={() => console.log(data)}
          className="border border-color-black w-[150px] h-[50px]"
        >
          console log content data
        </button>*/}
        {params.slug[0] === "newpost" ? (
          <button onClick={() => uploadData({ date: date, content: data })}>
            upload
          </button>
        ) : null}
        {data && params.slug[0] !== "newpost" && (
          <button
            className="mx-8"
            onClick={() =>
              changeData({ date: date, content: data }, params.slug)
            }
          >
            change
          </button>
        )}
      </div>
      <div className="border-t border-black flex flex-col justify-center items-center">
        Post preview
        {data && date && <Preview date={date} editorData={data} />}
      </div>
    </>
  );
}

async function getData(slug: string[]) {
  const res = await fetch("/admin/api", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug[0]}/${slug[1]}`,
    },
  });
  return await res.json();
}

async function uploadData(body: any) {
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

async function changeData(body: any, slug: string[]) {
  const res = await fetch("/admin/api", {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${slug[0]}/${slug[1]}`,
      case: "post",
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  console.log(response);
}
