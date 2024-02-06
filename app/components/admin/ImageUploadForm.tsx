import { useEffect, useState } from "react";
import { sendImage } from "@/app/utils/services/fileService";
import Button from "./Button";
import { transliterate } from "@/app/utils/services/fileName";

interface Props {
  imageNameProp?: string;
  setImageNameProp?: (value: string) => void;
}

async function sendImageToServer(formData: FormData) {
  return await sendImage(formData);
}

export default function ImageUploadForm(props: Props) {
  const { setImageNameProp } = props;
  const [imageName, setImageName] = useState(props.imageNameProp || "");
  const [imageAlt, setImageAlt] = useState("");
  const [file, setFile] = useState<FileList | null>(null);
  const [inputTypeState, setInputTypeState] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [altError, setAltError] = useState(false);

  useEffect(() => {
    if (imageAlt) setAltError(false);
    if (file) setFileError(false);
  }, [imageAlt, file]);

  const validateForm = () => {
    if (file && imageAlt) {
      return true;
    }
    if (!file) {
      setFileError(true);
    }
    if (!imageAlt) {
      setAltError(true);
    }
    return false;
  };

  const prepareFile = () => {
    const originalFile = file![0];
    const newFileName = transliterate(originalFile.name);
    return new File([originalFile], newFileName, {
      type: originalFile.type,
      lastModified: originalFile.lastModified,
    });
  };

  const prepareFormData = (updatedFile: File) => {
    const formData = new FormData();
    formData.append("file", updatedFile);
    formData.append("alt", imageAlt);
    return formData;
  };

  const handleServerResponse = (response: any) => {
    console.log(response);
    setImageName(response.name);
    setInputTypeState(true);
    if (setImageNameProp) setImageNameProp(response.name);
  };
  const uploadImage = async () => {
    if (validateForm()) {
      const updatedFile = prepareFile();
      const formData = prepareFormData(updatedFile);

      try {
        const response = await sendImageToServer(formData);
        handleServerResponse(response);
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
      }
    }
  };

  function handleInputChange() {
    setInputTypeState(!inputTypeState);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="w-[80px]">картинка</div>
        <div>
          {inputTypeState ? (
            <input
              value={imageName}
              onChange={(e) => {
                setImageName(e.target.value);
                if (setImageNameProp) {
                  setImageNameProp(e.target.value);
                }
              }}
              className="border border-black w-[400px]"
            />
          ) : (
            <div className="flex flex-col gap-3">
              <div className="w-[400px] flex justify-between">
                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    className="border border-black w-[315px]"
                    onChange={(e) => setFile(e.target.files)}
                  />
                  {fileError && (
                    <div className="text-red-500">файл не выбран</div>
                  )}
                </div>
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
            </div>
          )}
        </div>
      </div>

      {!inputTypeState && (
        <div className="flex gap-2">
          <div className="w-[80px]">alt</div>
          <div className="flex flex-col gap-2">
            <input
              value={imageAlt}
              onChange={(e) => setImageAlt(e.target.value)}
              className="border border-black w-[315px]"
            />
            {altError && <div className="text-red-500">не ввели alt</div>}
          </div>
        </div>
      )}

      {setImageNameProp && (
        <div className="flex items-center">
          <Button
            onClick={() => {
              handleInputChange();
            }}
          >
            {inputTypeState ? "загрузить картинку" : "ввести имя картинки"}
          </Button>
        </div>
      )}
    </div>
  );
}
