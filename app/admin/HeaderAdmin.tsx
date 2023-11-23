import Link from "next/link";

export default function HeaderAdmin() {
	return (
		<div className='flex gap-2 justify-center'>
			<Link href={"/"}>Home</Link>
			<Link href={"/admin"}>Admin</Link>
			<Link href={"/admin/posts"}>Posts</Link>
			<Link href={"/admin/posteditor"}>Post editor</Link>
			<Link href={"/admin/videos"}>Videos</Link>
			<Link href={"/admin/images"}>Images</Link>
			<Link href={"/admin/files"}>Files</Link>
		</div>
	);
}
