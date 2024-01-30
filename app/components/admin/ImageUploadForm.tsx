import { useRef, useState } from "react";
import { sendImage } from "@/app/utils/services/fileService";
import Button from "./Button";

interface Props {
  imageName: string;
  setImageName: Function;
}

async function sendImageToServer(formData: FormData) {
  return await sendImage(formData);
}

export default function ImageUploadForm(props: Props) {
  const { imageName, setImageName } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputTypeState, setInputTypeState] = useState(false);
  let formData = new FormData();

  function uploadImage() {
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0
    ) {
      console.log(inputRef.current.files[0]);
      formData.append("file", inputRef.current.files[0]);
      sendImageToServer(formData).then((e) => {
        setImageName(e.name);
        setInputTypeState(true);
      });
    }
  }

  function handleInputChange() {
    setInputTypeState(!inputTypeState);
  }

  return (
    <div className="flex gap-3 h-[30px]">
      <div className="w-[80px]">картинка</div>
      {inputTypeState ? (
        <input
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          className="border border-black w-[400px]"
        />
      ) : (
        <div className="w-[400px] flex justify-between">
          <input
            ref={inputRef}
            type="file"
            className="border border-black w-[315px]"
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
