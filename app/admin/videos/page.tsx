// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { getAllData, deleteItem } from "@/app/utils/services/dataService";
import VideoItem from "@/app/components/admin/VideoItem";
import VideoUploadForm from "@/app/components/admin/VideoUploadForm";
import Link from "next/link";
import Button from "@/app/components/admin/Button";

interface VideoObject {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  imgName: string;
}

export default function Videos() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    try {
      getAllData("videos").then((result) => setData(result));
    } catch (e) {
      console.log(e);
    }
  }, [update]);

  function deleteHandler(id: string) {
    deleteItem(id, "videos").then(() => setUpdate(!update));
  }

  return (
    <div className="mt-[30px]">
      <div className="w-screen flex justify-end p-3">
        <Link href={"videos/newVideo"}>
          <Button>добавить новое видео</Button>
        </Link>
      </div>

      {data && (
        <div className="flex flex-col gap-8 w-[90%] mx-auto mt-[30px]">
          {data.map((item: VideoObject) => {
            console.log(item);
            return (
              <VideoItem
                key={item.id}
                videoObject={item}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
