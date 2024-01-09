import React from "react";

interface Image {
  id: number;
  name: string;
}

interface Props {
  data: Image[];
  deleteHandler: Function;
}

const Images: React.FC<Props> = ({ data, deleteHandler }) => {
  return (
    <div className="px-8">
      <div className="flex flex-col">
        {data.map((item: any) => {
          return (
            <div className="flex gap-4" key={item.id}>
              <img
                alt={item.id + " || " + item.name}
                src={`https://arthttp.ru/images/${item.name}`}
                className="w-[100px] h-[100px]"
              />
              <button onClick={() => deleteHandler(item.id)}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
