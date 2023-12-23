import Link from "next/link";

export default function HeaderAdmin() {
  return (
    <div className="flex gap-2 justify-center">
      <Link href={"/"} prefetch={false}>
        Home
      </Link>
      <Link href={"/admin"} prefetch={false}>
        Admin
      </Link>
      <Link href={"/admin/posts"} prefetch={false}>
        Posts
      </Link>
      <Link href={"/admin/posteditor"} prefetch={false}>
        Post editor
      </Link>
      <Link href={"/admin/videos"} prefetch={false}>
        Videos
      </Link>
      <Link href={"/admin/images"} prefetch={false}>
        Images
      </Link>
      <Link href={"/admin/files"} prefetch={false}>
        Files
      </Link>
    </div>
  );
}
