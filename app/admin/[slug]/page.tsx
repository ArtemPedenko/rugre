import { cookies } from "next/headers";

export const revalidate = 1;

interface RoteDictionary {
  [key: string]: string;
}
const roteDictionary: RoteDictionary = {
  posts: "posts",
  images: "images",
  videos: "videos",
  files: "docs",
};
export default async function AdminSlug({
  params,
}: {
  params: { slug: string };
}) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${process.env.BASE_URL}/admin/api`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      url: `https://arthttp.ru/api/${roteDictionary[params.slug]}`,
      Cookie: `accessToken=${accessToken};`,
    },
  });
  const response = await res.json();
  console.log(response);

  return (
    <>
      <div>{params.slug}</div>
    </>
  );
}
