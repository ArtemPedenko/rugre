"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navDictionary = [
  { ref: "/", name: "Home" },
  { ref: "/admin", name: "Admin" },
  { ref: "/admin/posts", name: "Posts" },
  { ref: "/admin/posteditor/newpost", name: "Post editor" },
  { ref: "/admin/videos", name: "Videos" },
  { ref: "/admin/images", name: "Images" },
  { ref: "/admin/files", name: "Files" },
];

export default function HeaderAdmin() {
  const pathname = usePathname();
  return (
    <div className="flex gap-2 justify-center">
      {navDictionary.map((item, index) => {
        return (
          <Link
            href={item.ref}
            prefetch={false}
            key={index}
            className={`${
              pathname === item.ref
                ? "border border-black px-2 rounded"
                : "hover:border border-black px-2 rounded"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
