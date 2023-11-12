import Button from "./Button";

export default function MobileMenu({ show }: { show: string }) {
	return (
		<div
			className={`${show} overflow-hidden w-[250px] z-50 px-4 absolute mt-[12px] right-0 bg-white flex flex-col items-start gap-[10px] justify-center`}
		>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>НОВОСТИ</Button>
			</div>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>БИБЛИОТЕКА</Button>
			</div>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>ВИДЕО</Button>
			</div>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>БИОГРАФИЯ</Button>
			</div>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>СОРАТНИКИ</Button>
			</div>
			<div className='border-b border-black w-full pb-[10px]'>
				<Button>КОНТАКТЫ</Button>
			</div>
		</div>
	);
}
