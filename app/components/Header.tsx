import MobileMenuLogo from '@/public/MobileMenuLogo';
import Slider from './Slider/Slider';

//
export default function Header() {
	return (
		<div className='relative'>
			<div className='relative z-20 flex justify-between items-center h-[104px] px-4 pt-4 max-w-[1175px] w-full mx-auto s:h-[140px] s:pt-8 md:pt-8'>
				<img alt='logo' src='/logo.png' className='h-full' />
				<div className='w-[68px] h-14'>
					<MobileMenuLogo />
				</div>
			</div>
			<div className='border-2 border-red-500 w-full mt-[-90px] z-1  '>
				<Slider />
			</div>
		</div>
	);
}

//<div className='w-full relative -top-[90px] z-10  '>
