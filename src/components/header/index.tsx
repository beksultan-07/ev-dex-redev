import React, {useState} from 'react';
import {Container} from '../../UI/UI';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import LogoDark from '../../assets/dark-logo.svg';
import {ReactComponent as Burger} from '../../assets/burger/burger.svg';
import {ReactComponent as BurgerActive} from '../../assets/burger/burger-active.svg';
import HeaderNavbar from '../header_navbar';
import {Link} from 'react-router-dom';

type HeaderProps = {
	dark: 'true' | 'false';
};
const HeaderBlock = styled.header<HeaderProps>`
  padding: 15px 0;
  position: fixed;
  width: 100%;
  background: ${props => props.dark === 'true' ? '#111A23' : 'rgba(255, 255, 255, 0.8)'};
  filter: drop-shadow(${props => props.dark === 'true' ? '0px 4px 10px rgba(40, 40, 40, .0)' : '0px 4px 10px rgba(200, 200, 200, 0.1)'});
  border-bottom: ${props => props.dark === 'true' ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
  z-index: 3;
  backdrop-filter: blur(25px);
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoLink = styled(Link)<HeaderProps>`
  font-family: "Exo 2";
  font-weight: 700;
  font-size: 18px;
  line-height: calc(24 / 18 * 100%);
  color: ${props => props.dark === 'true' ? '#fff' : '#045599'};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
	outline: none;
`;
const LogoImg = styled.img``;
const BurgerButton = styled.button`
	outline: none;
  border: none;
  background: none;
	@media (min-width: 1125px) {
    display: none;
  }
	
`;
const BurgerImage = styled(Burger)<HeaderProps>`
  width: 24px;
	fill: ${props => props.dark === 'true' ? '#fff' : '#133D65'};
  @media (min-width: 1125px) {
    display: none;
  }
`;
const BurgerImageActive = styled(BurgerActive)<HeaderProps>`
	width: 24px;
	fill: ${props => props.dark === 'true' ? '#fff' : '#133D65'};
  @media (min-width: 1125px) {
    display: none;
  }
`;
type Props = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header: React.FC<Props> = ({dark}) => {
	const [burger, setBurger] = React.useState(false);

	return (
		<>
			<HeaderBlock dark={dark ? 'true' : 'false'} id="header">
				<Container>
					<Content>
						<LogoLink dark={dark ? 'true' : 'false'} to="/">
							<LogoImg src={ dark ? LogoDark as string : Logo as string} alt="logo"/>
						Envoys Vision
						</LogoLink>
						<HeaderNavbar setBurger={setBurger} dark={dark} burger={burger}/>
						<BurgerButton onClick={() => {
							setBurger(a => !a);
						}}>
							{burger ? (
								<BurgerImageActive dark={dark ? 'true' : 'false'}/>
							) : (
								<BurgerImage dark={dark ? 'true' : 'false'}/>
							)
							}
						</BurgerButton>
					</Content>
				</Container>
			</HeaderBlock>
		</>
	);
};

export default Header;
