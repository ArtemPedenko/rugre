import { getLatestPosts } from "@/lib/api";
import Logger from "./Logger";

export default async function Home() {
	const data = await getLatestPosts();
	return (
		<main>
			<Logger data={data.nodes} />
			<div>HОВОСТИ</div>
			<div>{data.nodes[0].content}</div>
		</main>
	);
}

export const revalidate = 0;
