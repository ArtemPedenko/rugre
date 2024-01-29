import { useRef, useState } from "react";
import { sendImage } from "@/app/utils/services/fileService";

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

  return (
    <div className="flex gap-3">
      <div className="w-[80px]">картинка</div>
      {!inputTypeState && (
        <input
          ref={inputRef}
          type="file"
          className="border border-black w-[300px]"
        />
      )}
      {inputTypeState && (
        <input
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
          className="border border-black w-[300px]"
        />
      )}
      <button
        onClick={() => {
          uploadImage();
        }}
        className="w-[100px] border border-black"
      >
        загрузить
      </button>
    </div>
  );
}
