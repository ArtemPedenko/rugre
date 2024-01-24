"use client";
import { useState } from "react";
import { uploadVideo } from "@/app/utils/services/dataService";
import ImageUploadForm from "@/app/components/admin/ImageUploadForm";

interface Props {}

export default function VideoUploadForm(props: Props) {
  const [title, setTitle] = useState("");
  const [videUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [imageName, setImageName] = useState("");

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
    </div>
  );
}
