"use client";

import { useEffect, useState } from "react";
import Images from "@/app/admin/[slug]/sections/Images";
import Files from "@/app/admin/[slug]/sections/Files";
import Posts from "@/app/admin/[slug]/sections/Posts";
import { getAllData, deleteItem } from "@/app/utils/services/dataService";

export const revalidate = 1;

interface RoteDictionary {
  [key: string]: string;
}

const roteDictionary: RoteDictionary = {
  posts: "posts",
  images: "images",
  videos: "videos",
  files: "docs",
};

export default function AdminSlug({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<any>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    try {
      getAllData(roteDictionary[params.slug]).then((result) => setData(result));
    } catch (e) {
      console.log(e);
    }
  }, [update]);

  function deleteHandler(id: string) {
    deleteItem(id, roteDictionary[params.slug]).then(() => setUpdate(!update));
  }

  return (
    <div className="px-8 my-10">
      {/*<button onClick={() => console.log(data)}>console.log</button>*/}
      {params.slug === "images" && data.length !== 0 && (
        <Images data={data} deleteHandler={deleteHandler} />
      )}
      {params.slug === "files" && data.length !== 0 && (
        <Files data={data} deleteHandler={deleteHandler} />
      )}

      {params.slug === "posts" && data.length !== 0 && (
        <Posts data={data} deleteHandler={deleteHandler} />
      )}
    </div>
  );
}
