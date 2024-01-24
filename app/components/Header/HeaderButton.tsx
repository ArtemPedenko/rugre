import { FC } from "react";

interface ButtonProps {
  children: string;
  onClick?: React.InputHTMLAttributes<HTMLButtonElement>["onClick"];
}

export default function HeaderButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-xl font-normal hover:text-green"
    >
      {children}
    </button>
  );
}
