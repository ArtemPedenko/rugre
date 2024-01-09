"use client";

import { useEffect, useState } from "react";
import Images from "./sections/Images";
import Files from "./sections/Files";

export const revalidate = 1;

interface RoteDictionary {
  [key: string]: string;
}

interface Image {
  id: number;
  name: string;
}
const roteDictionary: RoteDictionary = {
  posts: "posts",
  images: "images",
  videos: "videos",
  files: "docs",
};

async function getData(slug: string) {
  const res = await fetch(`/admin/api`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${roteDictionary[slug]}`,
    },
  });
  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

async function deleteItem(id: string, slug: string) {
  await fetch(`/admin/api`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${roteDictionary[slug]}/${id}`,
    },
  });
}
export default function AdminSlug({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<Image[]>([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    try {
      getData(params.slug).then((result) => setData(result));
    } catch (e) {
      console.log(e);
    }
  }, [update]);

  function deleteHandler(id: string) {
    deleteItem(id, params.slug).then(() => setUpdate(!update));
  }

  return (
    <div className="px-8">
      <button onClick={() => console.log(data)}>console.log</button>
      {params.slug === "images" && data.length !== 0 && (
        <Images data={data} deleteHandler={deleteHandler} />
      )}
      {params.slug === "files" && data.length !== 0 && (
        <Files data={data} deleteHandler={deleteHandler} />
      )}
    </div>
  );
}
