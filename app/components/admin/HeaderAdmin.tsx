"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navDictionary = [
  { ref: "/", name: "Home", highLight: " " },
  { ref: "/admin", name: "Admin", highLight: " " },
  { ref: "/admin/posts", name: "Posts", highLight: " " },
  {
    ref: "/admin/posteditor/newpost",
    name: "Post editor",
    highLight: "posteditor",
  },
  { ref: "/admin/videos", name: "Videos", highLight: " " },
  { ref: "/admin/images", name: "Images", highLight: " " },
  { ref: "/admin/files", name: "Files", highLight: " " },
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
              pathname === item.ref || pathname.includes(item.highLight)
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
