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
    <div className="flex gap-4 justify-center py-2">
      {navDictionary.map((item, index) => {
        return (
          <Link
            href={item.ref}
            prefetch={false}
            key={index}
            className={`px-2 border border-black rounded ${
              pathname === item.ref
                ? "bg-black text-white"
                : "hover:hover:bg-black hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
