import React from 'react';
import styled from 'styled-components';
import {Container, Title} from '../../UI/UI';
import PartnersImg1 from '../../assets/partners/partner1.png';
import PartnersImg2 from '../../assets/partners/partner2.jpg';
import PartnersImg3 from '../../assets/partners/partner4.png';
// import PartnersImg4 from '../../assets/partners/partner5.png';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper';
import {useTranslation} from 'react-i18next';

const Wrap = styled.section`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  background: #fff;
  padding: 70px 0;
`;
const SwiperWrap = styled.div`
  ::before, ::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 30%;
    height: 600px;
    z-index: 2;
    background: linear-gradient(271.49deg, #FFFFFF 30.42%, rgba(255, 255, 255, 0) 95.89%);;
  }
  ::before {
    transform: rotate(180deg);
    left: 0;
  }
  @media (max-width: 780px) {
    :before, ::after {
      width: 20%;
    }
  }
  .swiper-wrapper {
    align-items: center;
    transition-timing-function: linear;
  }
`;
const SwiperTop = styled.div`
	margin-bottom: 50px;
`;
const SwiperBottom = styled.div`
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(21 / 18 * 100%);
  text-align: center;
  color: #0F2B46;
  margin-bottom: 100px;
`;
const ImageBlock = styled.div`
  max-width: 200px;
`;
const Image = styled.img`
  width: 100%;
`;

const Partners: React.FC = () => {
	const [t] = useTranslation();

	const slides = [
		{img: PartnersImg1 as string, alt: 'company logo'},
		{img: PartnersImg2 as string, alt: 'company logo'},
		{img: PartnersImg3 as string, alt: 'company logo'},
		// {img: PartnersImg4 as string, alt: 'company logo'},
	];
	return (
		<>
			<Wrap id="partners">
				<Container>
					<Title textAlign={true} color={'#0F2B46'}>
						{t('home.partners.title')}
					</Title>
					<Text>
						{t('home.partners.text')}
					</Text>
					<SwiperWrap>
						<SwiperTop>
							<Swiper
								centeredSlides={true}
								autoplay={{
									delay: 0,
								}}
								allowTouchMove={false}
								slidesPerView="auto"
								speed={4000}
								spaceBetween={50}
								loop={true}
								breakpoints={{
								// eslint-disable-next-line @typescript-eslint/naming-convention
									420: {
										slidesPerView: 2,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									620: {
										slidesPerView: 4,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									780: {
										slidesPerView: 5,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									1100: {
										slidesPerView: 7,
									},
								}}
								modules={[Autoplay]}
								className="mySwiper"
							>
								{slides.map((slide, index) => (
									<SwiperSlide key={index}>
										<ImageBlock>
											<Image src={slide.img} alt={slide.alt}/>
										</ImageBlock>
									</SwiperSlide>
								))}
							</Swiper>
						</SwiperTop>
						<SwiperBottom>
							<Swiper
								centeredSlides={true}
								autoplay={{
									delay: 0,
									reverseDirection: true,
								}}
								allowTouchMove = {false}
								slidesPerView="auto"
								speed={4000}
								spaceBetween={50}
								loop={true}
								breakpoints={{
									// eslint-disable-next-line @typescript-eslint/naming-convention
									420: {
										slidesPerView: 2,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									620: {
										slidesPerView: 4,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									780: {
										slidesPerView: 5,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									1100: {
										slidesPerView: 7,
									},
								}}
								modules={[Autoplay]}
								className="mySwiper"
							>
								{slides.map((slide, index) => (
									<SwiperSlide key={index}>
										<ImageBlock>
											<Image src={slide.img} alt={slide.img}/>
										</ImageBlock>
									</SwiperSlide>
								))}
							</Swiper>
						</SwiperBottom>
					</SwiperWrap>
				</Container>
			</Wrap>
		</>
	);
};

export default Partners;
