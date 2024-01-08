"use client";

import { useEffect, useState } from "react";

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

async function deleteItem(id: string, slug: string) {
  const res = await fetch(`/admin/api`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${roteDictionary[slug]}/${id}`,
    },
  });
}
export default function AdminSlug({ params }: { params: { slug: string } }) {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const res = fetch(`/admin/api`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        url: `https://arthttp.ru/api/${roteDictionary[params.slug]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [update]);

  return (
    <>
      <button onClick={() => console.log(data)}>console.log</button>
      {params.slug === "images" ? (
        <div className="flex flex-col">
          {data.map((item: any) => {
            return (
              <div className="flex gap-4" key={item.id}>
                <img
                  alt={item.id + " || " + item.name}
                  src={`https://arthttp.ru/images/${item.name}`}
                  className="w-[100px] h-[100px]"
                />
                <button
                  onClick={() => {
                    deleteItem(item.id, params.slug).then(() =>
                      setUpdate(!update),
                    );
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
