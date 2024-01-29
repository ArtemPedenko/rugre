type EditorBlocks = {
  id: string;
  type: string;
  data: {
    text?: string;
    url?: string;
  };
};

type PreviewProps = {
  date: string;
  editorData: {
    blocks: EditorBlocks[];
  };
};

export default function EditorPreview(props: PreviewProps) {
  const { date, editorData } = props;

  return (
    <div className="flex flex-col justify-center items-center max-w-[650px] w-full">
      <h2 className="text-bold text-[22px]">{date}</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        {editorData.blocks.map((item: EditorBlocks) => {
          if (item.type === "header") {
            return (
              <h2 key={item.id} className="text-bold text-[22px]">
                {item.data.text}
              </h2>
            );
          }
          if (item.type === "paragraph") {
            return <p key={item.id}>{item.data.text}</p>;
          }
          if (item.type === "image") {
            return (
              <img
                key={item.id}
                className="w-full"
                alt=""
                src={`https://arthttp.ru/images/${item.data.url}`}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
