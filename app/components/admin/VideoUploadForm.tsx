"use client";
import { useState } from "react";
import { changeData, uploadVideo } from "@/app/utils/services/dataService";
import ImageUploadForm from "@/app/components/admin/ImageUploadForm";

interface VideoObject {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  imgName: string;
}

export default function VideoUploadForm({ videoObject = {} as VideoObject }) {
  const [title, setTitle] = useState(videoObject?.title || "");
  const [videUrl, setVideoUrl] = useState(videoObject?.videoUrl || "");
  const [category, setCategory] = useState(videoObject?.category || "");
  const [imageName, setImageName] = useState(videoObject?.imgName || "");

  return (
    <div className="flex flex-col gap-4 mx-[50px]">
      <ImageUploadForm imageName={imageName} setImageName={setImageName} />
      <div>
        заголовок
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black w-[400px]"
        />
      </div>
      <div>
        url видео
        <input
          value={videUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border border-black w-[400px]"
        />
      </div>
      <div>
        категория
        <select
          id="categories"
          name="categories"
          onChange={(e) => setCategory(e.target.value)}
          className="border border-black"
        >
          <option value="reports">репортажи</option>
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
        отправить
      </button>

      <button
        onClick={() => {
          changeData(
            {
              title: title,
              imgName: imageName,
              videoUrl: videUrl,
              category: category,
            },
            ["videos", String(videoObject.id)],
          ).then((e) => console.log(e));
        }}
      >
        изменить
      </button>
    </div>
  );
}
