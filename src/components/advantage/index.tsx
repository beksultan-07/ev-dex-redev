import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

import BackgroundImg from '../../assets/advantage/bg.jpg';
import DollarIcon from '../../assets/advantage/icon1.svg';
import LikeIcon from '../../assets/advantage/icon2.svg';
import SafeIcon from '../../assets/advantage/icon3.svg';
import CaseIcon from '../../assets/advantage/icon4.svg';
import {Wrap} from '../../UI/UI';
import {useTranslation} from 'react-i18next';

const Background = styled.div`
  background: url(${BackgroundImg}) 0 0 / cover;
  width: 100%;
  padding: 80px 0;
`;
const FlexCenter = styled.div`
  max-width: 900px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
	max-width: 880px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
	gap: 80px 50px;
  @media (max-width: 830px) {
    gap: 60px 30px;
  }
	@media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 60px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
	height: 100px;
`;
const Icon = styled.img`
    width: 92px;
    @media (max-width: 830px) {
      width: 70px;
    }
		@media (max-width: 800px) {
      width: 60px;
    }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
	width: 260px;
`;
const Text = styled.h5`
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  @media (max-width: 475px) {
    font-size: 14px;
  }
`;
const Number = styled(CountUp)`
  font-family: 'Exo 2';
  font-style: italic;
  font-weight: 700;
  font-size: 32px;
  color: #FFFFFF;
  @media (max-width: 475px) {
    font-size: 24px;
  }
`;
type ItemType = {
	img: string;
	text: string;
	num: number;
	numType: 'percent' | 'sum' | '';
};

const Advantage: React.FC = () => {
	const [t] = useTranslation();

	const [items, setItems] = useState<ItemType[]>([
		{img: DollarIcon as string, text: '', num: 0.1, numType: 'percent'},
	]);

	const [animCount, setAnimCount] = React.useState(false);

	const ref = React.useRef(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const entry = entries[0];

			if (entry.isIntersecting) {
				setAnimCount(true);
			}
		});

		if (ref.current) {
			observer.observe(ref.current);
		}
	}, [ref]);

	useEffect(() => {
		setItems(
			[
				{img: DollarIcon as string, text: t('home.advantages1.option1'), num: 0.1, numType: 'percent'},
				{img: SafeIcon as string, text: t('home.advantages1.option2'), num: 625347594, numType: 'sum'},
				{img: LikeIcon as string, text: t('home.advantages1.option3'), num: 1329113, numType: ''},
				{img: CaseIcon as string, text: t('home.advantages1.option4'), num: 41600342591, numType: 'sum'},
			],
		);
	}, [t]);

	return (
		<>
			<Wrap bg={false}>
				<Background>
					<FlexCenter>
						<Content ref={ref}>
							{items.map((item, index) => (
								<Item key={index}>
									<Icon src={item.img}/>
									<TextBlock>
										<Text>{item.text}</Text>
										{animCount && <Number
											start={0}
											end={item.num}
											separator=" "
											duration={2}
											prefix={item.numType === 'sum' ? '$' : ''}
											suffix={item.numType === 'percent' ? '%' : ' '}
										/>
										}
									</TextBlock>
								</Item>
							))}
						</Content>
					</FlexCenter>
				</Background>
			</Wrap>
		</>

	);
};

export default Advantage;
