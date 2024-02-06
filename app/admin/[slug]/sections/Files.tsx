import Button from "@/app/components/admin/Button";
import React from "react";

interface File {
  id: number;
  name: string;
}

interface Props {
  data: File[];
  deleteHandler: Function;
}

const Files: React.FC<Props> = ({ data, deleteHandler }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col gap-3">
        {data.map((item: File) => {
          console.log(item);
          return (
            <div
              className="flex gap-4 justify-between items-center border-y border-black p-1"
              key={item.id}
            >
              {item.name}
              <div className="w-[100px] h-[50px] flex justify-center items-center">
                <Button onClick={() => deleteHandler(item.id)}>удалить</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Files;
