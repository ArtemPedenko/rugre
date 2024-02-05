import Button from "@/app/components/admin/Button";
import React, { useState } from "react";
import ImageUploadForm from "@/app/components/admin/ImageUploadForm";

interface Image {
  id: number;
  name: string;
}

interface Props {
  data: Image[];
  deleteHandler: Function;
}

const Images: React.FC<Props> = ({ data, deleteHandler }) => {
  const [newImage, setNewImage] = useState(false);

  return (
    <div className="px-8 flex flex-col">
      <div>
        <Button onClick={() => setNewImage(!newImage)}>
          Загрузить картинку
        </Button>
      </div>
      <div className="my-3">{newImage && <ImageUploadForm />}</div>
      <div className="flex flex-col gap-3">
        {data.map((item: Image) => {
          return (
            <div
              className="flex gap-4 justify-center items-center"
              key={item.id}
            >
              <img
                alt={item.id + " || " + item.name}
                src={`https://arthttp.ru/images/${item.name}`}
                className="w-[100px] h-[100px]"
              />
              <div>{item.name}</div>
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

export default Images;
