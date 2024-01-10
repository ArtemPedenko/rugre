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
      <div className="flex flex-col">
        {data.map((post: Post, index: number) => {
          console.log(post);
          return (
            <div className="flex gap-4" key={index}>
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
              <button
                className="border border-black rounded px-2"
                onClick={() => deleteHandler(post.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
