import React from 'react';
import HowItWorksImg from '../../assets/how_it_works/howItWorks.svg';
import {Container, Title, Wrap} from '../../UI/UI';
import styled from 'styled-components';

const Desc = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 123.19%;
  color: #0F2B46;
	max-width: 380px;
	margin-bottom: 20px;
  @media (max-width: 1070px) {
    text-align: center;
	  margin: 0 auto 20px auto;
  }
`;
const Image = styled.img`
	width: 100%;
`;

const HowItWorks: React.FC = () => (
	<>
		<Wrap bg={false}>
			<Container>
				<Title textAlign={false}>Как это работает</Title>
				<Desc>Майнинг ликвидности, торговля с помощью пулов или классической книги ордеров!</Desc>
				<Image src={HowItWorksImg as string} alt={HowItWorksImg as string}/>
			</Container>
		</Wrap>
	</>
);

export default HowItWorks;
