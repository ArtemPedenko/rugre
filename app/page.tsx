import { getLatestPosts } from "@/lib/api";
import Logger from "./Logger";

export default async function Home() {
  const data = await getLatestPosts();
  console.log("asd");
  return (
    <main>
      <Logger data={data} />
      <div>HОВОСТИ</div>
      {/* {typeof data.nodes[0].content == "string" ? (
				<div dangerouslySetInnerHTML={{ __html: data.nodes[2].content }} />
			) : null} */}
    </main>
  );
}

export const revalidate = 0;
