import React from 'react';
import HowItWorksImg from '../../assets/how_it_works/howItWorks.svg';
import Swipe from '../../assets/how_it_works/swipe.svg';
import {Container, Title, Wrap} from '../../UI/UI';
import styled from 'styled-components';

const Content = styled.div`
	padding: 70px 0;
`;
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
const ImageScroll = styled.div`
	@media(max-width: 600px){
    ::-webkit-scrollbar{
	    display: none;
    }
		overflow-x: scroll;
	}
`;
const ImageBlock = styled.div`
	min-height: 360px ;
		@media(max-width: 600px){
			width: 765px;
		}
`;
const Image = styled.img`
	width: 100%;
	object-fit: cover;
`;
const SwipeIcon = styled.img`
  text-align: center;
	display: none;
	@media(max-width: 600px){
		display: block;
		max-width: 29px;
		margin: 0 auto;
	}
`;

const HowItWorks: React.FC = () => (
	<>
		<Wrap bg={false} id="how-it-works">
			<Container>
				<Content>
					<Title textAlign={false}>Как это работает</Title>
					<Desc>Майнинг ликвидности, торговля с помощью пулов или классической книги ордеров!</Desc>
					<ImageScroll>
						<ImageBlock>
							<Image src={HowItWorksImg as string} alt={HowItWorksImg as string}/>
						</ImageBlock>
					</ImageScroll>
					<SwipeIcon src={Swipe as string} alt={Swipe as string}/>
				</Content>
			</Container>
		</Wrap>
	</>
);

export default HowItWorks;
