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
            <div className="flex gap-4" key={item.id}>
              {item.name}
              <button onClick={() => deleteHandler(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Files;
