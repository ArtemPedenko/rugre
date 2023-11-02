import Image from "next/image";

//
export default function Header() {
  return (
    <div className="border-2 border-red-700 flex flex-row justify-between items-center h-[120px] max-w-[1175px]  w-full mx-auto px-[15px] pt-[32px] s:h-[140px]">
      <img alt="logo" src="/logo.png" />
      <div>2222</div>
    </div>
  );
}
