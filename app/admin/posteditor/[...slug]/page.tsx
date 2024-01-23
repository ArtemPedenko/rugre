// @ts-nocheck
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import EditorPreview from "../../../components/admin/EditorPreview";
import {
  getOneData,
  uploadData,
  changeData,
} from "@/app/utils/services/dataService";

const Editor = dynamic(
  () => import("../../../components/admin/Editor/Editor"),
  {
    ssr: false,
  }
);

export default function PageEditor({ params }: { params: { slug: string } }) {
  const [data, setData] = useState();
  const [date, setDate] = useState("");

  useEffect(() => {
    if (params.slug[0] !== "newpost") {
      getOneData(params.slug).then((result) => {
        console.log(result);
        setDate(result.date);
        setData(result.content);
        return result;
      });
    }
  }, []);

  return (
    <div className="my-8">
      {/* <button
    onClick={() => console.log(data)}
    className="border border-color-black w-[150px] h-[50px]"
  >
    console log content data
  </button>*/}
      <div>
        <div className="flex gap-2 max-w-[650px] h-[40px] mx-auto items-center">
          Date:
          <input
            className="w-[100px] border border-black"
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

        {params.slug[0] === "newpost" && (
          <button onClick={() => uploadData({ date: date, content: data })}>
            upload
          </button>
        )}
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
      <div className="flex flex-col justify-center items-center border-t border-black">
        Preview
        {data && date && <EditorPreview date={date} editorData={data} />}
      </div>
    </div>
  );
}
