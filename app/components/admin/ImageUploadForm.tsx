import { useEffect, useRef, useState } from "react";
import { sendImage } from "@/app/utils/services/fileService";
import Button from "./Button";
import { transliterate } from "@/app/utils/services/fileName";

interface Props {
  imageName: string;
  setImageName: Function;
  imageAlt: string;
  setImageAlt: Function;
}

async function sendImageToServer(formData: FormData) {
  return await sendImage(formData);
}

export default function ImageUploadForm(props: Props) {
  const { imageName, setImageName, imageAlt, setImageAlt } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputTypeState, setInputTypeState] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [altError, setAltError] = useState(false);
  let formData = new FormData();

  useEffect(() => {
    if (imageAlt) {
      setAltError(false);
    }
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0
    ) {
      setFileError(false);
    }
  }, [imageAlt, inputRef.current?.files]);

  function uploadImage() {
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0 &&
      imageAlt
    ) {
      const originalFile = inputRef.current.files[0];
      const newFileName = transliterate(originalFile.name);
      const updatedFile = new File([originalFile], newFileName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
      });
      formData.append("file", updatedFile);
      formData.append("alt", imageAlt);
      sendImageToServer(formData).then((e) => {
        console.log(e);
        setImageName(e.name);
        setInputTypeState(true);
      });
    }
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length < 1
    ) {
      setFileError(true);
    }
    if (!imageAlt) {
      setAltError(true);
    }
  }

  function handleInputChange() {
    setInputTypeState(!inputTypeState);
  }

  return (
    <div className="flex gap-3 ">
      <div className="w-[80px]">картинка</div>
      {inputTypeState ? (
        <input
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          className="border border-black w-[400px]"
        />
      ) : (
        <div className="flex flex-col gap-3 border border-black">
          <div className="w-[400px] flex justify-between">
            <input
              ref={inputRef}
              type="file"
              className="border border-black w-[315px]"
              onChange={(e) => console.log(e.target.files)}
            />
            <div className="flex items-center">
              <Button
                onClick={() => {
                  uploadImage();
                }}
              >
                загрузить
              </Button>
            </div>
          </div>
          {fileError && <div className="text-red-500">файл не выбран</div>}
          <div className="flex gap-2">
            <div>alt</div>
            <input
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              className="border border-black w-[315px]"
            />
          </div>
          {altError && <div className="text-red-500">не ввели alt</div>}
        </div>
      )}

      <div className="flex items-center">
        <Button
          onClick={() => {
            handleInputChange();
          }}
        >
          {inputTypeState ? "загрузить картинку" : "ввести имя картинки"}
        </Button>
      </div>
    </div>
  );
}
