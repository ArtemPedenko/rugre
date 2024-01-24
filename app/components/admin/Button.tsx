interface ButtonProps {
  children: string;
  onClick?: React.InputHTMLAttributes<HTMLButtonElement>["onClick"];
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-2 border border-black rounded hover:hover:bg-black hover:text-white"
    >
      {children}
    </button>
  );
}
