// @ts-nocheck

'use client';

import { FC, useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
	//console.log(data);
	let sliderRef = useRef(null);

	function handleNext() {
		sliderRef?.current.swiper.slideNext();
	}

	function handlePrev() {
		sliderRef?.current.swiper.slidePrev();
	}
	const pagination = {
		clickable: true,
	};

	return (
		<Swiper
			direction={'vertical'}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			ref={sliderRef}
			slidesPerView={1}
			slidesPerGroup={1}
			spaceBetween='30px'
			loop={true}
			className='swiper-container-slider'
			autoplay={{
				delay: 100,
				disableOnInteraction: false,
			}}
		>
			<SwiperSlide className='swiper-slide-slider'>
				<img
					className='img'
					alt='q'
					src='https://ruslangrebnev.ru/wp-content/uploads/2022/11/1research.png'
				/>
			</SwiperSlide>
			<SwiperSlide className='swiper-slide-slider'>
				<img
					className='img'
					alt='q'
					src='https://ruslangrebnev.ru/wp-content/uploads/2022/11/1research.png'
				/>
			</SwiperSlide>
			<SwiperSlide className='swiper-slide-slider'>
				<img
					className='img'
					alt='q'
					src='https://ruslangrebnev.ru/wp-content/uploads/2022/11/1research.png'
				/>
			</SwiperSlide>
			<SwiperSlide className='swiper-slide-slider'>
				<img
					className='img'
					alt='q'
					src='https://ruslangrebnev.ru/wp-content/uploads/2022/11/1research.png'
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Slider;
