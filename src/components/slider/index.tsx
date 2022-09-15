import React, {useEffect, useState} from 'react';
import DexBg from '../../assets/slider/dex-bg.jpg';
import DexBgMobile from '../../assets/slider/dex-bg-mobile.png';
import DexBgDark from '../../assets/slider/dex-bg-dark.jpg';
import DexBgDarkMobile from '../../assets/slider/dex-bg-dark-mobile.png';
import WalletBg from '../../assets/slider/wallet.jpg';
import WalletBgMobile from '../../assets/slider/wallet.png';
import LaunchBg from '../../assets/slider/launchpad.jpg';
import LaunchBgMobile from '../../assets/slider/launchpad-mobile.png';
import CreditsBg from '../../assets/slider/cryptocredits.jpg';
import CreditsBgMobile from '../../assets/slider/cryptocredits.png';
import NftBg from '../../assets/slider/nft.jpg';
import NftBgMobile from '../../assets/slider/nft.png';
import Arrow from '../../assets/slider/arrow.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import {EffectFade, Navigation, Scrollbar, Mousewheel} from 'swiper';
import {Button, ButtonOutline} from '../../UI/UI';
import {useTranslation} from 'react-i18next';

const SwiperWrap = styled.section`
  min-height: 80vh;
  height: 80%;
  display: flex;
  align-items: center;
	@media(max-width: 992px){
		display: none;
	}
  .swiper-button-next, .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(189, 189, 189, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    padding: 30px;
    background-image: url(${Arrow});
    background-position: center;
    background-repeat: no-repeat;
    transition: .3s ease-in-out;
    :hover {
      background-color: rgba(255, 255, 255, 0.70);
      box-shadow: 0px 0px 25px rgba(189, 189, 189, .70);
    }
  }
  .swiper-button-prev {
    transform: rotate(180deg);
    left: 135px;
    box-shadow: 0px -4px 4px rgba(189, 189, 189, 0.15);
    :hover {
      box-shadow: 0px 0px 25px rgba(189, 189, 189, .70);
    }
  }
  .swiper-button-next {
    right: 135px;
  }
	@media(max-width: 1300px){
		.swiper-button-next {
	    right: 40px;
	  }
		.swiper-button-prev {
	    left: 40px;
	  }
	}
	@media(max-width: 1140px){
		.swiper-button-next {
	    right: 20px;
	  }
		.swiper-button-prev {
	    left: 20px;
	  }
	}
  .swiper-button-disabled {
    opacity: .30;

    :hover {
      background-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 4px rgba(189, 189, 189, .15);
    }
  }
`;
type FillbarSliderType = {
	width: number;
};
const FillBarBlock = styled.div`
  border-radius: 15px;
  -ms-touch-action: none;
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 4px;
  background: #FFFFFF;
  border-radius: 15px;
  z-index: 3;
`;
const FillBar = styled.span<FillbarSliderType>`
  display: block;
  min-width: 20px;
  width: ${props => `${props.width}%`};
  height: 100%;
  background: #b1adb3;
  border-radius: 15px;
  transition: .2s linear;
`;
type SlideProps = {
	bg?: string;
	image: string;
};
const Slide = styled.div<SlideProps>`
  background: ${props => props.bg} url(${props => props.image}) center center / cover no-repeat;
	height: 100%;
	min-height: 80vh;
  @media (max-width: 1336px) {
    background-position-x: center ;
  }
`;
type InfoProps = {
	positionRight: boolean;
};
const Info = styled.div<InfoProps>`
  padding: ${props => props.positionRight ? '220px 0 0 650px' : '220px 0 0 150px'};
	max-width: 1080px;
	margin: 0 auto;
	@media(max-width: 1060px){
    padding: ${props => props.positionRight ? '220px 0 0 550px' : '220px 0 0 80px'};
  }
	@media(max-width: 992px){
		padding: 40px 0 60px 20px;
		margin: 0;
	}
`;
type TitleProps = {
	white: boolean;
};
const Title = styled.h1<TitleProps>`
  font-family: 'Exo 2';
  font-weight: 700;
  font-size: 48px;
  line-height: calc(58 / 48 * 100%);
  color: ${props => props.white ? '#fff' : '#0F2B46'};
	@media(max-width: 600px){
		font-size: 34px;
	}
`;
const TitleSpan = styled.span`
  color: #F48020;
`;
const Text = styled.p<TitleProps>`
  font-weight: 400;
  font-size: 18px;
  line-height: 123.19%;
  color: ${props => props.white ? '#fff' : '#0F2B46'};
  max-width: 446px;
  margin: 33px 0;
	@media(max-width: 992px){
		max-width: unset;
		margin: 22px 0;
	}
	@media(max-width: 600px){
		font-size: 14px;
	}
`;
const ImageBlock = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 0px 70% 0px;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
	@media(max-width: 400px){
		gap: 15px;
		a{
			font-size: 10px;
			padding: 12px 20px;
		}
	}
`;

const AdaptiveWrap = styled.section`
	display: none;
	@media(max-width: 992px){
		display: block;
	}
`;
const Content = styled.div`
	display: flex;
  align-items: flex-start;
	flex-direction: column;
`;
type ColumnProps = {
	bg: boolean;
};
const Column = styled.div<ColumnProps>`
	width: 100%;
  background-color: ${props => props.bg ? '#111A23' : '#fff'};
`;

const Slider: React.FC = () => {
	const [slides, setSlides] = useState([
		{
			img: {desktop: DexBg as string, mobile: DexBgMobile as string},
			title: 'Farming and Staking',
			whiteTitle: false,
			yellowTitle: ' ',
			text: 'Получай доход от 10% до 100% годовых!',
			right: false,
			buttonText: 'Начать фарминг',
			buttonOutlineText: 'Узнать больше',
			unvisible: false,
		},
	]);
	const [slideIndex, setSlideIndex] = React.useState<number>(0);

	const [t] = useTranslation();

	useEffect(() => {
		setSlides([
			{
				img: {desktop: DexBg as string, mobile: DexBgMobile as string},
				title: t('home.dex.slide1.title'),
				whiteTitle: false,
				yellowTitle: ' ',
				text: t('home.dex.slide1.text'),
				right: false,
				buttonText: t('home.dex.slide1.btn1'),
				buttonOutlineText: t('home.dex.slide1.btn2'),
				unvisible: false,
			},
			{
				img: {desktop: DexBgDark as string, mobile: DexBgDarkMobile as string},
				title: t('home.dex.slide2.title2'),
				whiteTitle: true,
				yellowTitle: t('home.dex.slide2.title'),
				text: t('home.dex.slide2.text'),
				right: false,
				buttonText: t('home.dex.slide2.btn1'),
				buttonOutlineText: t('home.dex.slide2.btn2'),
				unvisible: false,
			},
			{
				img: {desktop: WalletBg as string, mobile: WalletBgMobile as string},
				title: t('home.dex.slide3.title2'),
				whiteTitle: true,
				yellowTitle: t('home.dex.slide3.title'),
				text: t('home.dex.slide3.text'),
				right: true,
				buttonText: t('home.dex.slide3.btn1'),
				buttonOutlineText: t('home.dex.slide3.btn2'),
				unvisible: false,
			},
			{
				img: {desktop: LaunchBg as string, mobile: LaunchBgMobile as string},
				title: t('home.dex.slide4.title'),
				whiteTitle: true,
				yellowTitle: ' ',
				text: t('home.dex.slide4.text'),
				right: false,
				buttonText: t('home.dex.slide4.btn1'),
				buttonOutlineText: t('home.dex.slide4.btn2'),
				unvisible: false,
			},
			{
				img: {desktop: CreditsBg as string, mobile: CreditsBgMobile as string},
				title: t('home.dex.slide5.title'),
				whiteTitle: true,
				yellowTitle: ' ',
				text: t('home.dex.slide5.text'),
				right: true,
				buttonText: '',
				buttonOutlineText: t('home.dex.slide5.btn1'),
				unvisible: true,
			},
			{
				img: {desktop: NftBg as string, mobile: NftBgMobile as string},
				title: t('home.dex.slide6.title'),
				whiteTitle: true,
				yellowTitle: 'NFT',
				text: t('home.dex.slide6.text'),
				right: false,
				buttonText: '',
				buttonOutlineText: t('home.dex.slide6.btn'),
				unvisible: true,
			},
		]);
	}, [t]);

	return (
		<>
			<SwiperWrap id="facts">
				<Swiper
					spaceBetween={30}
					onSlideChange={e => {
						setSlideIndex(e.activeIndex);
					}}
					effect={'fade'}
					navigation={true}
					scrollbar={{
						hide: false,
					}}
					mousewheel={{
						releaseOnEdges: true,
					}}
					modules={[EffectFade, Navigation, Scrollbar, Mousewheel]}
					className="mySwiper"
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={index}>
							<Slide image={slide.img.desktop}>
								<Info positionRight={slide.right}>
									<Title white={slide.whiteTitle}> <TitleSpan>{slide.yellowTitle}</TitleSpan> {slide.title}</Title>
									<Text white={slide.whiteTitle}>{slide.text}</Text>
									<Buttons>
										<Button unvisible={slide.unvisible}>{slide.buttonText}</Button>
										<ButtonOutline soon={slide.unvisible} white={slide.whiteTitle} to={slide.unvisible ? '#' : '/dex-info'}>
											{slide.buttonOutlineText}
										</ButtonOutline>
									</Buttons>
								</Info>
							</Slide>
						</SwiperSlide>
					))}
					<FillBarBlock>
						<FillBar width={slideIndex / (slides.length - 1) * 100}></FillBar>
					</FillBarBlock>
				</Swiper>
			</SwiperWrap>

			<AdaptiveWrap>
				<Content>
					{slides.map((slide, index) => (
						<Column bg={slide.whiteTitle} key={index}>
							<ImageBlock><Image src={slide.img.mobile}/></ImageBlock>
							<Info positionRight={false}>
								<Title white={slide.whiteTitle}><TitleSpan>{slide.yellowTitle}</TitleSpan> {slide.title}</Title>
								<Text white={slide.whiteTitle}>{slide.text}</Text>
								<Buttons>
									<Button unvisible={slide.unvisible}>{slide.buttonText}</Button>
									<ButtonOutline soon={slide.unvisible} white={slide.whiteTitle} to={slide.unvisible ? '#' : '/dex-info'}>{slide.buttonOutlineText}</ButtonOutline>
								</Buttons>
							</Info>
						</Column>
					))}
				</Content>
			</AdaptiveWrap>
		</>
	);
};

export default Slider;
