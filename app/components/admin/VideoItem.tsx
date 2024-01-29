import Button from "./Button";
import Link from "next/link";

interface VideoObject {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
  imgName: string;
}

interface Props {
  videoObject: VideoObject;
  deleteHandler: Function;
}

export default function VideoItem(props: Props) {
  const { videoObject, deleteHandler } = props;
  return (
    <div className="w-full flex justify-between items-center gap-4 border border-black rounded p-3">
      <Link
        href={`videos/${videoObject.id}`}
        className="w-full flex justify-between items-center gap-4"
      >
        <div>{videoObject.title}</div>
        <div>{videoObject.category}</div>
        <div>{videoObject.videoUrl}</div>
        <img
          alt={videoObject.imgName}
          src={`https://arthttp.ru/images/${videoObject.imgName}`}
          className="w-[100px] h-[100px] border border-black"
        />
      </Link>
      <div className="w-[100px] h-[50px] flex justify-center items-center">
        <Button onClick={() => deleteHandler(videoObject.id)}>удалить</Button>
      </div>
    </div>
  );
}
