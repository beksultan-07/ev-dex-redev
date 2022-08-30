import React, {useState} from 'react';
import {Container} from '../../UI/UI';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import Burger from '../../assets/burger/burger.svg';
import BurgerActive from '../../assets/burger/burger-active.svg';
import HeaderNavbar from '../header_navbar';

const HeaderBlock = styled.div`
  padding: 15px 0;
  position: fixed;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(50px);
  filter: drop-shadow(0px 4px 10px rgba(200, 200, 200, 0.1));
  z-index: 3;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoLink = styled.a`
  font-family: "Exo 2";
  font-weight: 700;
  font-size: 18px;
  line-height: calc(24 / 18 * 100%);
  color: #045599;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LogoImg = styled.img``;
type BurgerProps = {
	active: boolean;
};
export const BurgerImage = styled.img`
  width: 24px;
  @media (min-width: 1125px) {
    display: none;
  }
`;
type Props = {
	langActive: boolean;
	setLangActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header: React.FC<Props> = ({langActive, setLangActive}) => {
	const [burger, setBurger] = React.useState(false);

	return (
		<>
			<HeaderBlock>
				<Container>
					<Content>
						<LogoLink>
							<LogoImg src={Logo as string} alt="logo"/>
              Envoys Vision
						</LogoLink>
						<HeaderNavbar langActive={langActive} setLangActive={setLangActive} burger={burger}/>
						<BurgerImage src={burger ? BurgerActive as string : Burger as string} onClick={() => {
							setBurger(a => !a);
						}}/>
					</Content>
				</Container>
			</HeaderBlock>
		</>
	);
};

export default Header;
