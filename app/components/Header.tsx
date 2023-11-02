import Image from "next/image";

//
export default function Header() {
  return (
    <div>
      <div className="border-2 border-red-600 flex flex-row justify-between items-end h-[88px] max-w-[1175px]  w-full mx-auto px-[15px] pt-[32px] s:h-[108px]">
        <img alt="logo" src="/logo.png" />
        <div>2222</div>
        <div>3333</div>
      </div>
    </div>
  );
}
