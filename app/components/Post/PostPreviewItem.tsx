import { Block, Post } from "@/app/utils/interfaces/Post";

interface PostPreviewItemProps {
  data: Post;
}

interface postPreviewInterface {
  date: string;
  header: string;
  paragraph: string;
}

function prepareData(data: Post) {
  let date: string = data.date;
  let header: string = "";
  let paragraph: string[] = [];
  data.content.blocks.map((item: Block) => {
    if (item.type === "header") header = item.data.text!;
    if (item.type === "paragraph") paragraph.push(item.data.text!);
  });
  const p = paragraph.join(" ").split(" ").slice(0, 25).join(" ") + "...";
  return {
    date: date,
    header: header,
    paragraph: p,
  };
}

export default function PostPreviewItem({ data }: PostPreviewItemProps) {
  // console.log(data);
  const previewData = prepareData(data);

  return (
    <div className="flex gap-4 border-t-2 border-black">
      <div className="text-[16px] ">{previewData.date}</div>
      <div className="text-[22px] w-[550px]">{previewData.header}</div>
      <div
        className="font-serif text-[15px] font-normal max-w-[400px] "
        dangerouslySetInnerHTML={{ __html: previewData.paragraph }}
      />
    </div>
  );
}
