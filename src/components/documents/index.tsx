import React, {useState} from 'react';
import {Container, Title} from '../../UI/UI';
import styled from 'styled-components';
import DownloadIcon from '../../assets/documents/dowload.svg';
import DocumentImg1 from '../../assets/documents/Документы-ЕВДЕ1.webp';
import DocumentImg2 from '../../assets/documents/Документы-ЕВДЕ2.webp';
import DocumentImg3 from '../../assets/documents/Документы-ЕВДЕ3.webp';
import DocumentImg4 from '../../assets/documents/Документы-ЕВДЕ4.webp';
import DocumentImg5 from '../../assets/documents/Документы-ЕВДЕ5.webp';
import DocumentImg6 from '../../assets/documents/Документы-ЕВДЕ6.webp';
import DocumentImg7 from '../../assets/documents/Документы-ЕВДЕ7.webp';
import DocumentImg8 from '../../assets/documents/Документы-ЕВДЕ8.webp';
import DocumentImg9 from '../../assets/documents/Документы-ЕВДЕ9.webp';
import DocumentImg10 from '../../assets/documents/Документы-ЕВДЕ10.webp';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper';
import {useTranslation} from 'react-i18next';

const Wrap = styled.section`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
	width: 100%;
	min-height: 560px;
  background: #111A23;
  padding: 70px 0;
  position: relative;
  ::before, ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 30%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(271.49deg, rgb(10, 29, 47) 30.42%, rgba(255, 255, 255, 0) 95.89%);
  }
  ::before {
    transform: rotate(180deg);
    left: 0;
  }
  @media(max-width: 780px){
    :before{
      display: none;
    }
    :after{
      display: none;
    }
  }
`;
const Item = styled.div`
  position: relative;
  padding: 3px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(40px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  min-height: 275px;
  margin: 0 auto;
  text-align: center;
`;
const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 123.19%;
  color: #FFFFFF;
  padding: 20px 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: .2;
  cursor: pointer;
  border-radius: 0 0 8px 8px;
`;
const Icon = styled.img``;
const Button = styled.a`
  position: absolute;
  bottom: 25px;
  left: calc(50% - 75px);
  background: #0A1D2F;
  padding: 10px 20px;
  margin: 0 17px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
	transition: .3s ease-in-out;
	:hover{
    background: #0b45b2;
	}
  @media (max-width: 420px) {
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 50px;
    margin: 0;
  }
`;
const ButtonText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #FFFFFF;
`;
const SwiperWrap = styled.div``;

const Documents: React.FC = () => {
	const {t, i18n} = useTranslation();

	const [docs, setDocs] = React.useState([
		{
			title: 'Certificate of state registration', img: {
				ru: DocumentImg1 as string,
				en: DocumentImg2 as string,
			}, link: {
				ru: 'https://drive.google.com/uc?export=download&id=1h3q5VPlDBtbD_aTS__g2kLJ-tBHSV-Hy',
				en: 'https://drive.google.com/uc?export=download&amp;id=1-G7wdiBMrFYuIwQ74JOgSyhqzdheBP8C',
			}},
		{
			title: 'License to organize trading on the securities market', img: {
				ru: DocumentImg3 as string,
				en: DocumentImg4 as string,
			}, link: {
				ru: 'https://drive.google.com/uc?export=download&id=1LqTnk760B5iOcSr2pbN_b6WhzSvddStZ',
				en: 'https://drive.google.com/uc?export=download&id=1Vo7zBgJJQ_0hlWUjhqKb1Hotd1naUvZq',
			}},
		{
			title: 'License for depositary activity', img: {
				ru: DocumentImg5 as string,
				en: DocumentImg6 as string,
			}, link: {
				ru: 'https://drive.google.com/uc?export=download&id=1cgfEMTQYwSAhvbbBNHhBp7tmWApFRaLz',
				en: 'https://drive.google.com/uc?export=download&id=1tyvB0QkEcu2gDnHd7siOt0_kO2reL9LL',
			}},
		{
			title: 'Software State Registration Certificate', img: {
				ru: DocumentImg7 as string,
				en: DocumentImg8 as string,
			}, link: {
				ru: 'https://drive.google.com/uc?export=download&id=1cuQdMlxyNvwWZ839FKS5JBoC_sJ1kFdQ',
				en: 'https://drive.google.com/uc?export=download&id=14_XrRvr572qW-R2O24fIypa3e6j_b5xE',
			}},
		{
			title: 'Decision on the founding issue of shares', img: {
				ru: DocumentImg9 as string,
				en: DocumentImg10 as string,
			}, link: {
				ru: 'https://drive.google.com/uc?export=download&id=1q2HHa6dPSmE8518DUIMtF3Cicns3EbuP',
				en: 'https://drive.google.com/uc?export=download&id=1sGBJr5IGt0gNS1H9gEtlCVYPyKEoL5bH',
			}},
	]);

	return (
		<>
			<Wrap id="documents">
				<Content>
					<Container>
						<Title indentBottom={'90px'} textAlign={true} color={'#fff'}>Документы</Title>
						<SwiperWrap>
							<Swiper
								centeredSlides={true}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
									pauseOnMouseEnter: true,
								}}
								slidesPerView="auto"
								speed={2000}
								spaceBetween={30}
								loop
								breakpoints={{
									// eslint-disable-next-line @typescript-eslint/naming-convention
									320: {
										slidesPerView: 1,
										speed: 300,
									},
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
									900: {
										slidesPerView: 6,
									},
									// eslint-disable-next-line @typescript-eslint/naming-convention
									1100: {
										slidesPerView: 7,
									},
								}}
								modules={[Autoplay]}
								className="mySwiper"
							>
								{docs.map((doc, index) => (
									<SwiperSlide key={index}>
										<Item>
											<ItemTitle>{doc.title}</ItemTitle>
											<Image src={doc.img[i18n.language as keyof typeof doc.img]} alt={'document'}/>
											<Button href={doc.link[i18n.language as keyof typeof doc.link]}>
												<Icon src={DownloadIcon as string} alt={'download icon'}/>
												<ButtonText>Скачать</ButtonText>
											</Button>
										</Item>
									</SwiperSlide>
								))}
							</Swiper>
						</SwiperWrap>
					</Container>
				</Content>
			</Wrap>
		</>
	);
};

export default Documents;
