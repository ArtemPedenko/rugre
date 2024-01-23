// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import {
  getAllData,
  deleteItem,
  uploadVideo,
} from "@/app/utils/services/dataService";
import VideoForm from "@/app/components/admin/VideoForm";

export default function Videos() {
  const [data, setData] = useState();
  const [update, setUpdate] = useState(false);
  const [newVideo, setNewVideo] = useState(false);
  const [title, setTitle] = useState("");
  const [videUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    console.log("useEffect");
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
    <>
      <button
        onClick={() => {
          setNewVideo(!newVideo);
          setData([]);
        }}
        className="px-4"
      >
        add new video
      </button>
      {data && (
        <div className="flex flex-col gap-8 ">
          {data.map((item: any, index: number) => {
            console.log(item);
            return (
              <div
                key={item.id}
                className="mx-8 flex justify-center items-center gap-4 border border-black"
              >
                <div>{item.title}</div>
                <div>{item.category}</div>
                <div>{item.videoUrl}</div>
                <img
                  alt={item.imgName}
                  src={`https://arthttp.ru/images/${item.imgName}`}
                  className="w-[100px] h-[100px] border border-black"
                />
                <button
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                  className="border border-black p-2"
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      )}

      {newVideo && (
        <div className="flex flex-col gap-4 mx-[50px]">
          <VideoForm imageName={imageName} setImageName={setImageName} />
          <div>
            title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-black w-[400px]"
            />
          </div>
          <div>
            video url
            <input
              value={videUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="border border-black w-[400px]"
            />
          </div>
          <div>
            category
            <select
              id="fruits"
              name="fruits"
              onChange={(e) => setCategory(e.target.value)}
              className="border border-black"
            >
              <option value="Репортажи">репортажи</option>
              <option value="public-lectures">публичные лекции</option>
              <option value="geopolitics-theory">теория геополитики</option>
            </select>
          </div>
          <button
            onClick={() => {
              uploadVideo({
                title: title,
                imgName: imageName,
                videoUrl: videUrl,
                category: category,
              }).then((e) => console.log(e));
            }}
          >
            upload
          </button>
        </div>
      )}
    </>
  );
}
