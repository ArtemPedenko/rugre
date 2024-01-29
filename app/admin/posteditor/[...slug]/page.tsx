"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import EditorPreview from "../../../components/admin/EditorPreview";
import {
  getOneData,
  uploadData,
  changeData,
} from "@/app/utils/services/dataService";
import Button from "@/app/components/admin/Button";

const Editor = dynamic(
  () => import("../../../components/admin/Editor/Editor"),
  {
    ssr: false,
  },
);

export default function PageEditor({ params }: { params: { slug: string[] } }) {
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

        {/*для того чтобы Editor отрендерился с данными если они есть*/}
        {data && params.slug[0] !== "newpost" ? (
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        ) : null}
        {params.slug[0] === "newpost" ? (
          <Editor data={data} onChange={setData} holder="editorjs-container" />
        ) : null}

        <div className="flex max-w-[650px]  mx-auto items-center justify-center">
          <div className="w-[100px] h-[50px] flex justify-center items-start">
            {params.slug[0] === "newpost" ? (
              <Button onClick={() => uploadData({ date: date, content: data })}>
                загрузить
              </Button>
            ) : (
              <Button
                onClick={() =>
                  changeData({ date: date, content: data }, params.slug)
                }
              >
                изменить
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center border-t border-black">
        Preview
        {data && date && <EditorPreview date={date} editorData={data} />}
      </div>
    </div>
  );
}
