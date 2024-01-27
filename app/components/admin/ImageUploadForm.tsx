// @ts-nocheck
import { useRef, useState } from "react";
import { sendImage } from "@/app/utils/services/fileService";

interface CustomFormData extends FormData {
  name: string;
  value: Blob;
  fileName?: string;
}

interface Props {
  imageName: string;
  setImageName: Function;
}

async function sendImageToServer(formData: CustomFormData) {
  return await sendImage(formData);
}

export default function ImageUploadForm(props: Props) {
  const { imageName, setImageName } = props;
  const inputRef = useRef(null);
  let formData = new FormData();

  function changeInput() {
    if (inputRef.current) {
      console.log(inputRef.current.files[0]);
      formData.append("file", inputRef.current.files[0]);
      sendImageToServer(formData).then((e) => {
        setImageName(e.name);
      });
    }
  }

  return (
    <div>
      {!imageName && (
        <input
          ref={inputRef}
          type="file"
          className="border border-black w-[300px]"
        />
      )}
      {imageName && (
        <input
          value={imageName}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-black w-[300px]"
        />
      )}
      <button
        onClick={() => {
          changeInput();
        }}
        className="w-[100px] border border-black"
      >
        загрузить
      </button>
    </div>
  );
}
