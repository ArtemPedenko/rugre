import React from "react";

interface Data {
  id: number;
  name: string;
}

interface Props {
  data: Data[];
  deleteHandler: Function;
}

const Files: React.FC<Props> = ({ data, deleteHandler }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col">
        {data.map((item: any) => {
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
