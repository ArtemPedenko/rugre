"use client";
import VideoUploadForm from "@/app/components/admin/VideoUploadForm";
import { useEffect, useState } from "react";
import { getOneData } from "@/app/utils/services/dataService";

export default function VideoSlug({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [data, setData] = useState();
  useEffect(() => {
    if (slug !== "newVideo") {
      getOneData(["videos", slug]).then((e) => setData(e));
    }
  }, []);

  return (
    <>
      {slug === "newVideo" && <VideoUploadForm />}
      {data && <VideoUploadForm videoObject={data} />}
    </>
  );
}
