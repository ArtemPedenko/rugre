import MobileMenuLogo from '@/public/MobileMenuLogo';
import Slider from './Header/Slider/Slider';
import Button from './Header/Button';

//
export default function Header() {
	return (
		<div className='relative bg-light_green'>
			<div className='relative z-20 flex justify-between items-center h-[104px] px-4 pt-4 max-w-[1175px] w-full mx-auto sm:h-[140px] sm:pt-8'>
				<img alt='logo' src='/logo.png' className='h-full' />
				<div className='hidden md:flex gap-4'>
					<Button>НОВОСТИ</Button>
					<Button>БИБЛИОТЕКА</Button>
					<Button>ВИДЕО</Button>
					<Button>БИОГРАФИЯ</Button>
					<Button>СОРАТНИКИ</Button>
					<Button>КОНТАКТЫ</Button>
				</div>
				<div className='w-[68px] h-[68px] md:hidden '>
					<MobileMenuLogo />
				</div>
			</div>
			<div className='flex relative items-end w-full mt-[-90px] z-1 h-[265px] xxs:h-[317px] xs:h-[355px] sm:h-[400px] md:h-auto'>
				<Slider />
			</div>
			<div className='relative'>
				<img
					alt='geopolitic'
					src='/geo.png'
					className='absolute z-20 bottom-0 right-0 translate-y-1/2 mr-4 max-w-[185px] xxs:max-w-[250px] xs:max-w-[185px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[510px] '
				/>
			</div>
		</div>
	);
}

//<div className='w-full relative -top-[90px] z-10  '>
