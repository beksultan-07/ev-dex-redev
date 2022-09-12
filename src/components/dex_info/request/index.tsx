import React from 'react';
import ChatImage from '../../../assets/dex_info/chat.png';
import styled from 'styled-components';

const Wrap = styled.div`
  background: #121B24;
  border: 2px solid #F9F9F9;
  box-shadow: 27px 31px 100px -10px rgba(89, 42, 7, 0.05);
  border-radius: 16px;
	padding: 10px 48px;
	margin-bottom: 100px;
	max-width: 880px;
  @media(max-width: 720px) {
  	padding: 10px 48px 30px 48px;
  }
	@media(max-width: 575px) {
  	padding: 10px 15px 30px 15px;
  }
	
`;
const Content = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;
	@media(max-width: 720px){
		flex-direction: column-reverse;
	}
`;
const Info = styled.div``;
const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: calc(25 / 24 * 100%);
  color: #FFFFFF;
	@media(max-width: 425px){
    font-size: 22px;
	}
`;
const Desc = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: calc(20 / 18 * 100%);
  color: #FFFFFF;
	margin: 25px 0;
	max-width: 465px;
	@media(max-width: 425px){
    font-size: 16px;
	}
`;
const Button = styled.button`
  background: #F48020;
  box-shadow: 0px 10px 30px -10px rgba(228, 103, 0, 0.5);
  border-radius: 8px;
	padding: 17px 30px;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
	transition: .3s ease-in-out;
  :hover{
    background: rgb(223, 113, 22);
  }
`;
const ImageBlock = styled.div`
	max-width: 248px;
	width: 100%;
`;
const Image = styled.img`
	width: 100%;
`;

const Request: React.FC = () => (
	<>
		<Wrap>
			<Content>
				<Info>
					<Title>Все еще нужна наша помощь ?</Title>
					<Desc>Вы также можете отправить вопрос или запрос здесь, и мы обязательно свяжемся с вами! 👇</Desc>
					<Button>Отправить запрос</Button>
				</Info>
				<ImageBlock>
					<Image src={ChatImage as string} alt={ChatImage as string}/>
				</ImageBlock>
			</Content>
		</Wrap>
	</>
);

export default Request;
