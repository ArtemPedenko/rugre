import MobileMenuLogo from '@/public/MobileMenuLogo';

//
export default function Header() {
	return (
		<div className='border-2 border-red-700 z-2 flex justify-between items-center h-30 max-w-[1175px]  w-full mx-auto px-4 pt-8 s:h-[140px]'>
			<img alt='logo' src='/logo.png' />
			<div className='w-8 h-8'>
				<MobileMenuLogo />
			</div>
		</div>
	);
}
