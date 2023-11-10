import Button from "./Button";

export default function MobileMenu({ show }: { show: string }) {
	return (
		<div
			className={`${show} overflow-hidden w-[220px] z-50 px-4 absolute mt-[12px] right-0 bg-white flex flex-col items-start`}
		>
			<Button>НОВОСТИ</Button>
			<Button>БИБЛИОТЕКА</Button>
			<Button>ВИДЕО</Button>
			<Button>БИОГРАФИЯ</Button>
			<Button>СОРАТНИКИ</Button>
			<Button>КОНТАКТЫ</Button>
		</div>
	);
}
