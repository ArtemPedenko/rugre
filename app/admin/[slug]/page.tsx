import { headers } from "next/headers";

export default function AdminSlug({ params }: { params: { slug: string } }) {
  const headerss = headers();

  return (
    <>
      <div>{params.slug}</div>
    </>
  );
}
