import React, {useEffect, useState} from 'react';
import {Container, Title, Wrap} from '../../UI/UI';
import styled from 'styled-components';
import Icon1 from '../../assets/our_advantages/icon1.svg';
import Icon2 from '../../assets/our_advantages/icon2.svg';
import Icon3 from '../../assets/our_advantages/icon3.svg';
import {useTranslation} from 'react-i18next';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 895px) {
    flex-wrap: wrap;
    justify-content: center;
	  gap: 30px;
  }
`;
const Column = styled.div`
  flex: 0 1 360px;
  position: relative;
`;
const Item = styled.div`
  padding: 40px 30px 60px 30px;
  width: 100%;
  min-height: 100%;
  max-height: 352px;
  background: #FFFFFF;
  border: 2px solid #F9F9F9;
  border-radius: 22px;
  overflow: hidden;
  transition: .3s ease-in-out;
  position: relative;
  cursor: pointer;
  :hover {
    border: 2px solid #F9F9F9;
    box-shadow: 0px 64px 194px rgba(0, 0, 0, 0.05);
    border-radius: 22px;
  }
	:hover .line{
    :after{
      left: 0;
      right: auto;
      width: 100%;
    }
	}
`;
const Num = styled.h1`
  position: absolute;
  top: 17px;
  right: -20px;
  font-family: 'Exo 2';
  font-weight: 900;
  font-size: 293.314px;
  line-height: 137px;
  letter-spacing: -0.02em;
  color: #F9F9F9;
  z-index: 1;
`;
const TextBlock = styled.div`
  position: relative;
  z-index: 1;
`;
const ItemTitle = styled.h4`
  font-family: 'Exo 2';
  font-weight: 800;
  font-size: 20px;
  color: #0F2B46;
  line-height: calc(30 / 20 * 100%);
  margin: 25px 0 10px;
  z-index: 2;
  @media (max-width: 475px) {
    font-size: 16px;
  }
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14 * 100%);
  color: #0F2B46;
  z-index: 2;
  @media (max-width: 475px) {
    font-size: 12px;
  }
`;
const IconWrap = styled.div`
  padding: 14px;
  background: #F9F9F9;
  border-radius: 20px;
  max-width: 64px;
  height: 64px;
`;
const Icon = styled.img``;
const Line = styled.div`
	width: 165px;
  position: absolute;
	bottom: 30px;
	left: 30px;
		:after{
			content: '';
	    width: 0;
	    height: 5px;
	    display: block;
	    background: #F48020;
	    border-radius: 7px;
	    position: absolute;
			bottom: 0;
	    transition: .3s;
	    right: 0;
		}
`;

type ItemType = {
	icon: string;
	title: string;
	alt: string;
	num: number;
	desc: string;
};
const OurAdvantages: React.FC = () => {
	const [t] = useTranslation();
	const [items, setItems] = useState<ItemType[]>([
		{
			title: '',
			alt: '',
			desc: '',
			icon: Icon1 as string,
			num: 1,
		},
	]);

	useEffect(() => {
		setItems([
			{
				title: t('home.advantages2.values.option1.title'),
				alt: 'bank icon',
				desc: t('home.advantages2.values.option2.text'),
				icon: Icon1 as string,
				num: 1,
			},
			{
				title: t('home.advantages2.values.option2.title'),
				alt: 'token icon',
				desc: t('home.advantages2.values.option2.text'),
				icon: Icon2 as string,
				num: 2,
			},
			{
				title: t('home.advantages2.values.option3.title'),
				alt: 'support icon',
				desc: t('home.advantages2.values.option3.text'),
				icon: Icon3 as string,
				num: 3,
			},
		]);
	}, [t]);

	return (
		<>
			<Wrap bg={false} id="our-advantages">
				<Container maxWidth={'1186px'}>
					<Title top="70px" indentBottom={'120px'} textAlign={true}>
						{t('home.advantages2.title')}
					</Title>
					<Content>
						{items.map((item, index) => (
							<Column key={index}>
								<Item >
									<Num>{item.num}</Num>
									<TextBlock>
										<IconWrap>
											<Icon src={item.icon} alt={item.alt}/>
										</IconWrap>
										<ItemTitle>{item.title}</ItemTitle>
										<Desc>{item.desc}</Desc>
									</TextBlock>
									<Line className="line"></Line>
								</Item>
							</Column>
						))}
					</Content>
				</Container>
			</Wrap>
		</>
	);
};

export default OurAdvantages;
