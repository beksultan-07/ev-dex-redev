import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/advantage/bg.jpg';
import DollarIcon from '../../assets/advantage/icon1.svg';
import LikeIcon from '../../assets/advantage/icon2.svg';
import SafeIcon from '../../assets/advantage/icon3.svg';
import CaseIcon from '../../assets/advantage/icon4.svg';

const Wrap = styled.section`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  
`;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 50px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 60px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Icon = styled.img`
  width: 92px;
  @media (max-width: 800px) {
    width: 60px;
  }
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Text = styled.h5`
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  @media (max-width: 475px) {
    font-size: 14px;
  }
`;
const Number = styled.h2`
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
	num: string;
};

const Advantage = () => {
	const items: ItemType[] = [
		{img: DollarIcon as string, text: 'Низкие комиссии!', num: '0.1%'},
		{img: SafeIcon as string, text: 'Total value locked', num: '$625 347 594'},
		{img: LikeIcon as string, text: 'Нам доверяют', num: '1 329 113'},
		{img: CaseIcon as string, text: 'Total trading volume', num: '$41 600 342 591'},
	];
	return (
		<>
			<Wrap>
				<Background>
					<FlexCenter>
						<Content>
							{items.map((item, index) => (
								<Item key={index}>
									<Icon src={item.img}/>
									<TextBlock>
										<Text>{item.text}</Text>
										<Number>{item.num}</Number>
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
