import React from 'react';
import styled from 'styled-components';
import {Button} from '../../UI/UI';
import ImageCookie from '../../assets/cookie/cookie.svg';

type ConfirmVisibility = {
	show: boolean;
};

const Wrap = styled.div<ConfirmVisibility>`
  position: fixed;
  bottom: 50px;
  right: 70px;
  padding: 40px 28px;
  background: #0D2C46;
  border-radius: 20px;
  z-index: 4;
  max-width: 308px;
  transition: .3s;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  @media (max-width: 992px) {
    bottom: 20px;
    right: 20px;
  }
  @media (max-width: 540px) {
    bottom: 10px;
    right: 10px;
  }
`;

const Image = styled.img`
  width: 40px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  margin: 10px 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  margin: 0 0 30px;
`;

type Props = {
	confirm: boolean;
	setConfirmVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cookie: React.FC<Props> = ({confirm, setConfirmVisibility}) => (
	<>
		<Wrap show={confirm}>
			<Image src={ImageCookie as string} alt={Image as string}/>
			<Title>Ваша конфиденциальность</Title>
			<Text>
				Нажимая «Принять все файлы cookie», вы соглашаетесь с тем, что Envoys Dex может хранить файлы cookie на вашем устройстве и раскрывать информацию в соответствии с нашей Политикой использования файлов cookie.
			</Text>
			<Button unvisible={false} onClick={() => {
				setConfirmVisibility(false);
			}} href="#">
				Принять все файлы cookie
			</Button>
		</Wrap>
	</>
);

export default Cookie;
