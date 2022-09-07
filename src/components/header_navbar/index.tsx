import React, {useState} from 'react';
import HeaderLang from '../header_lang';
import styled from 'styled-components';

type BurgerProps = {
	active: boolean;
	dark: boolean;
};
const NavbarBlock = styled.nav<BurgerProps>`
  display: flex;
  align-items: center;
  gap: 30px;
  z-index: 2;
  @media (max-width: 1125px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: ${props => props.dark ? '#111A23' : '#fff'};
    padding: 70px 0px 70px 70px;
    transition: .3s;
    position: fixed;
    top: 48px;
    left: 0;
    opacity: ${props => props.active ? '1' : '0'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    overflow-y: scroll;
  }
  @media (max-width: 375px) {
    padding: 40px 0 40px 40px;
  }
`;
const Link = styled.a<BurgerProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.dark ? '#fff' : '#133D65'};
  cursor: pointer;
	transition: .3s ease-in-out;
	:hover{
		color: #F48020;
	}
  @media (max-width: 1125px) {
    font-size: 18px;
  }
`;
const Button = styled.a`
  background: #F48020;
  border-radius: 8px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  cursor: pointer;
	transition: .3s ease-in-out;
	:hover{
    background: rgb(223, 113, 22);
	}
  @media (max-width: 1125px) {
    font-size: 16px;
    padding: 17px 62px;
    border-radius: 12px;
    margin-top: 20px;
  }
`;
type Props = {
	burger: boolean;
	langActive: boolean;
	setLangActive: React.Dispatch<React.SetStateAction<boolean>>;
	dark: boolean;
};

const HeaderNavbar: React.FC<Props> = ({burger, langActive, setLangActive, dark}) => {
	const [links] = React.useState([
		{id: 1, text: 'Наши преймущества', href: '#'},
		{id: 2, text: 'Факты', href: '#'},
		{id: 3, text: 'Как это работает', href: '#'},
		{id: 4, text: 'Документы', href: '#'},
		{id: 5, text: 'Партнёры', href: '#'},
	]);

	return (
		<>
			<NavbarBlock dark={dark} active={burger}>
				{links.map(link => (<Link dark={dark} key={link.id} href={link.href} active={false}>{link.text}</Link>))}
				<Button href="#">Перейти в APP</Button>
				<HeaderLang dark={dark} langActive={langActive} setLangActive={setLangActive}/>
			</NavbarBlock>
		</>
	);
};

export default HeaderNavbar;
