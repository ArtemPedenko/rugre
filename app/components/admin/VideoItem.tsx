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
    <div className="mx-8 flex justify-center items-center gap-4 border border-black">
      <div>{videoObject.title}</div>
      <div>{videoObject.category}</div>
      <div>{videoObject.videoUrl}</div>
      <img
        alt={videoObject.imgName}
        src={`https://arthttp.ru/images/${videoObject.imgName}`}
        className="w-[100px] h-[100px] border border-black"
      />
      <button
        onClick={() => {
          deleteHandler(videoObject.id);
        }}
        className="border border-black p-2"
      >
        удалить
      </button>
    </div>
  );
}
