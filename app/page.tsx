"use client";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getAllData } from "@/app/utils/services/dataService";
import { Post } from "@/app/utils/interfaces/Post";
import PostPreviewItem from "@/app/components/Post/PostPreviewItem";

export default function Home() {
  const [postData, setPostData] = useState<Post[]>([]);
  useEffect(() => {
    getAllData("posts/0/3").then((e) => {
      setPostData(e);
    });
  }, []);

  return (
    <div>
      {/* <Logger data={data} /> */}
      <Header />
      <div className="pt-[59px] px-[15px] font-bold text-[65px]">
        <h2>HОВОСТИ</h2>
        <div className="flex flex-col gap-3 mt-[35px]">
          {postData.map((item: Post, index) => {
            return (
              <div key={item.id}>
                <PostPreviewItem data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
