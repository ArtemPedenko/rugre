import { headers } from "next/headers";

export default function PageEditor() {
  const headerss = headers();

  return (
    <>
      <div>admin page</div>
    </>
  );
}
export const revalidate = 0;
