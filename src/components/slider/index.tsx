import React from 'react';
import {Wrap} from '../../UI/UI';
import DexBg from '../../assets/slider/dex-bg.jpg';
import DexBgMobile from '../../assets/slider/dex-bg-mobile.png';
import DexBgDark from '../../assets/slider/dex-bg-dark.jpg';
import DexBgDarkMobile from '../../assets/slider/dex-bg-dark-mobile.png';
import WalletBg from '../../assets/slider/wallet.jpg';
import WalletBgMobile from '../../assets/slider/wallet.png';
import LaunchBg from '../../assets/slider/launcpad.jpg';
import LaunchBgMobile from '../../assets/slider/launcpad.png';
import CreditsBg from '../../assets/slider/cryptocredits.jpg';
import CreditsBgMobile from '../../assets/slider/cryptocredits.png';
import NftBg from '../../assets/slider/nft.jpg';
import NftBgMobile from '../../assets/slider/nft.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import {EffectFade, Navigation, Scrollbar, Mousewheel} from 'swiper';

const Content = styled.div`
  position: absolute;
	top: 50%;
	left: 35%;
	transform: translateX(-50%);
`;
const Title = styled.h1`
  font-family: 'Exo 2';
  font-weight: 700;
  font-size: 48px;
  line-height: calc(58 / 48 * 100%);
  color: #0F2B46;
	margin-bottom: 47px;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 123.19%;
  color: #0F2B46;
	margin-bottom: 30px;
`;
const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;

type SlideType = {
	img: string;
	title: string;
	text: string;
};

const Slider = () => {
	const slides: SlideType[] = [
		{img: DexBg as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
		{img: DexBgDark as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
		{img: WalletBg as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
		{img: LaunchBg as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
		{img: CreditsBg as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
		{img: NftBg as string, title: 'Farming and Staking', text: 'Получай доход от 10% до 100% годовых!'},
	];
	return (
		<>
			<Wrap bg={false}>
				<Swiper
					spaceBetween={30}
					effect={'fade'}
					navigation={true}
					scrollbar={{
						hide: false,
					}}
					mousewheel={true}
					modules={[EffectFade, Navigation, Scrollbar, Mousewheel]}
					className="mySwiper"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<Content>
								<Title>{slide.title}</Title>
								<Text>{slide.text}</Text>
							</Content>
							<Image src={slide.img} alt={slide.img}/>
						</SwiperSlide>
					))}
				</Swiper>
			</Wrap>
		</>
	);
};

export default Slider;
