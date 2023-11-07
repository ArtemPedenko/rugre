import { FC } from 'react';

interface ButtonProps {
	children: string;
	onClick?: React.InputHTMLAttributes<HTMLButtonElement>['onClick'];
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='cursor-pointer text-xl font-normal hover:text-green'
		>
			{children}
		</button>
	);
};

export default Button;
