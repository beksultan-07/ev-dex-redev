import React, {useState} from 'react';
import HeaderLang from '../header_lang';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

type BurgerProps = {
	active: boolean;
	dark: boolean;
};
const Navbar = styled.nav<BurgerProps>`
  @media (max-width: 1125px) {
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    padding: 70px 0px 70px 70px;
    transition: .3s;
    position: absolute;
    top: 60px;
    left: 0;
    opacity: ${props => props.active ? '1' : '0'};
  	background: ${props => props.dark ? '#111A23' : '#fff'};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
  }
  @media (max-width: 375px) {
    padding: 40px 0 40px 40px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 1125px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
	  z-index: 5;
  }
`;
const Link = styled.a<BurgerProps>`
  font-weight: 400;
  font-size: 14px;
  color: ${props => props.dark ? '#fff' : '#133D65'};
  cursor: pointer;
  transition: .3s ease-in-out;

  :hover {
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

  :hover {
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
	dark: boolean;
	setBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderNavbar: React.FC<Props> = ({burger, dark, setBurger}) => {
	const {t} = useTranslation();

	const [links, setLinks] = React.useState([
		{id: 1, text: t('header.link1'), href: ''},
	]);

	React.useEffect(() => {
		setLinks([
			{id: 1, text: t('header.link1'), href: '#our-advantages'},
			{id: 2, text: t('header.link2'), href: '#facts'},
			{id: 3, text: t('header.link3'), href: '#how-it-works'},
			{id: 4, text: t('header.link4'), href: '#documents'},
			{id: 5, text: t('header.link5'), href: '#partners'},

		]);
	}, [t]);

	return (
		<>
			<Navbar dark={dark} active={burger}>
				<Content className="content">
					{links.map(link => (<Link dark={dark} onClick={() => {
						setBurger(false);
					}} key={link.id} href={link.href} active={false}>{link.text}</Link>))}
					<Button target="_blank" href="https://app.envoys.vision/swap">{t('header.link6')}</Button>
					<HeaderLang dark={dark}/>
				</Content>
			</Navbar>
		</>
	);
};

export default HeaderNavbar;
