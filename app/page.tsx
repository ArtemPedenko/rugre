import { getLatestPosts } from '@/lib/api';
import Logger from './Logger';

export default async function Home() {
	const data = await getLatestPosts();
	return (
		<main>
			<Logger data={data} />
			<div>HОВОСТИ</div>
			<div>homepage</div>
		</main>
	);
}
