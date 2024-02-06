"use client";
import { useState } from "react";
import { changeData, uploadVideo } from "@/app/utils/services/dataService";
import ImageUploadForm from "@/app/components/admin/ImageUploadForm";
import Button from "./Button";

interface VideoObject {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  imgName: string;
  imgAlt: string;
}
interface VideoUploadFormProps {
  upload?: boolean;
  videoObject?: VideoObject | undefined;
}
export default function VideoUploadForm({
  upload,
  videoObject,
}: VideoUploadFormProps) {
  const [title, setTitle] = useState(videoObject?.title || "");
  const [videUrl, setVideoUrl] = useState(videoObject?.videoUrl || "");
  const [category, setCategory] = useState(videoObject?.category || "");
  const [imageNameProp, setImageNameProp] = useState(
    videoObject?.imgName || "",
  );

  function handleChange() {
    if (videoObject) {
      changeData(
        {
          title: title,
          imgName: imageNameProp,
          videoUrl: videUrl,
          category: category,
        },
        ["videos", String(videoObject.id)],
      ).then((e) => console.log(e));
    }
  }

  function handleUpload() {
    console.log(imageNameProp);
    uploadVideo({
      title: title,
      imgName: imageNameProp,
      videoUrl: videUrl,
      category: category,
    }).then((e) => console.log(e));
  }

  return (
    <div className="flex flex-col gap-4 mx-[50px] mt-[30px]">
      <ImageUploadForm setImageNameProp={setImageNameProp} />
      <div className="flex gap-3">
        <div className="w-[80px]">заголовок</div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-black w-[400px]"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-[80px]">url видео</div>
        <input
          value={videUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border border-black w-[400px]"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-[80px]">категория</div>
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
      <div className="w-[100px] mx-auto">
        {upload ? (
          <Button onClick={() => handleUpload()}>отправить</Button>
        ) : (
          <Button onClick={() => handleChange()}>изменить</Button>
        )}
      </div>
    </div>
  );
}
