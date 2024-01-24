import Button from "@/app/components/admin/Button";
import Link from "next/link";
import React from "react";

interface Data {
  level?: number;
  text?: string;
  url?: string;
}

interface Block {
  data: Data;
  id: string;
  type: string;
}

interface Content {
  blocks: Block[];
}

interface Post {
  date: string;
  id: string;
  content: Content;
}

interface Props {
  data: Post[];
  deleteHandler: Function;
}

const Posts: React.FC<Props> = ({ data, deleteHandler }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-3">
        {data.map((post: Post, index: number) => {
          return (
            <div
              className="flex gap-4 items-start justify-between max-h-[50px] overflow-hidden"
              key={index}
            >
              <div className="flex gap-4 w-[80%]">
                <p>{post.date}</p>
                {post.content.blocks.map((item: Block) => {
                  if (item.type === "header") {
                    return (
                      <div key={item.id} className="flex gap-4">
                        <Link href={`posteditor/posts/${post.id}`}>
                          {item.data.text}
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="w-[100px] h-[50px] flex justify-center items-start">
                <Button onClick={() => deleteHandler(post.id)}>удалить</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
