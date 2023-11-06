import MobileMenuLogo from '@/public/MobileMenuLogo';
import Slider from './Slider/Slider';

//
export default function Header() {
	return (
		<div className='relative bg-light_green'>
			<div className='relative z-20 flex justify-between items-center h-[104px] px-4 pt-4 max-w-[1175px] w-full mx-auto sm:h-[140px] sm:pt-8'>
				<img alt='logo' src='/logo.png' className='h-full' />
				<div className='text-xl'>НОВОСТИ</div>
				<div className='w-[68px] h-[68px] md:hidden '>
					<MobileMenuLogo />
				</div>
			</div>
			<div className='flex items-end w-full mt-[-90px] z-1 h-[265px] xxs:h-[317px] xs:h-[355px] sm:h-[400px] md:h-auto'>
				<Slider />
			</div>
		</div>
	);
}

//<div className='w-full relative -top-[90px] z-10  '>
