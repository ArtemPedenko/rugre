// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { getAllData, deleteItem } from "@/app/utils/services/dataService";
import VideoForm from "@/app/components/admin/VideoForm";

export default function Videos() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  const [newVideo, setNewVideo] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    try {
      getAllData("videos").then((result) => setData(result));
    } catch (e) {
      console.log(e);
    }
  }, [update]);

  function deleteHandler(id: string) {
    deleteItem(id, roteDictionary[params.slug]).then(() => setUpdate(!update));
  }

  return (
    <>
      <button onClick={() => setNewVideo(!newVideo)} className="px-4">
        add new video
      </button>
      {data &&
        data.map((item: any, index: number) => {
          console.log(item);
          return <div key={index}></div>;
        })}
      {newVideo && (
        <div>
          <VideoForm />
        </div>
      )}
    </>
  );
}
