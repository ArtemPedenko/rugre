import './globals.css';
import Header from './components/Header';
import { Bebas_Neue } from 'next/font/google';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

const bebas = Bebas_Neue({
	weight: '400',
	preload: false,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ru' className={bebas.className}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
