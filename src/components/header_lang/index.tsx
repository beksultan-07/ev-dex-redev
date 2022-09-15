import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Web} from '../../assets/lang/web.svg';
import {ReactComponent as Arrow} from '../../assets/lang/arrow-down.svg';
import {changeLang} from '../../translater/i18next';

const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const Wrap = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: 1125px) {
    margin-top: 55px;
  }
`;
const Content = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  @media (max-width: 1125px) {
    align-items: center;
    gap: 77px;
    position: relative;
    z-index: 5;
    ::before {
      content: '';
      background: #E6E6E6;
      height: 36px;
      width: 1.5px;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
`;
type DarkProps = {
	dark: 'true' | 'false';
};
const Text = styled.span<DarkProps>`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(21 / 18 * 100%);
  color: ${props => props.dark === 'true' ? '#fff' : '#133D65'};
  display: none;
  @media (max-width: 1125px) {
    display: block;
  }
`;
const WebIcon = styled(Web)<DarkProps>`
  fill: ${props => props.dark === 'true' ? '#fff' : '#133D65'};
`;
type ArrowIconProps = {
	rotate: 'true' | 'false';
	dark: 'true' | 'false';
};
const ArrowIcon = styled(Arrow)<ArrowIconProps>`
  transform: rotate(${props => props.rotate === 'true' ? '180deg' : '0'});
  transition: .3s ease-in-out;
	path{
		stroke: ${props => props.dark === 'true' ? '#fff' : '#133D65'};
	}
`;
type DropDownProps = {
	show: boolean;
	dark: boolean;
};
const DropDown = styled.div<DropDownProps>`
  padding: 30px 15px;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: absolute;
  top: ${props => props.show ? '100%' : '40%'};
  left: -20px;
  z-index: -1;
  background: ${props => props.dark ? '#111A23' : 'rgba(255, 255, 255, 0.8)'};
  box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
  border-radius: 0px 0px 8px 8px;
  transition: .3s ease-in-out;
  @media (max-width: 1125px) {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: ${props => props.dark ? '#111A23' : 'rgba(255, 255, 255, 0.8)'};
    backdrop-filter: blur(21.0503px);
    padding: 70px 0px 70px 70px;
    transition: .3s;
    position: fixed;
    top: 48px;
    left: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  @media (max-width: 375px) {
    padding: 40px 0 40px 40px;
  }
`;
type DropDownButtonProps = {
	dark: boolean;
};
const DropDownButton = styled.button<DropDownButtonProps>`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.dark ? '#fff' : '#133D65'};
  cursor: pointer;
  transition: .3s;
  border: none;
  background: transparent;
  margin-bottom: 20px;
	@media(max-width: 1125px){
		font-size: 18px;
	}
  :last-child {
    margin: 0;
  }
  :hover {
    color: #045599;
    font-weight: 600;
  }
`;
type Props = {
	dark: boolean;
};

const HeaderLang: React.FC<Props> = ({dark}) => {
	const [langActive, setLangActive] = React.useState(false);

	useEffect(() => {
		document.body.addEventListener('click', () => {
			setLangActive(false);
		});
	}, []);

	return (
		<>
			<Wrap>
				<Content>
					<Text dark={dark ? 'true' : 'false'}> Русский </Text>

					<Button onClick={e => {
						e.stopPropagation();
						setLangActive(val => !val);
					}}>

						<WebIcon dark={dark ? 'true' : 'false'}/>
						<ArrowIcon dark={dark ? 'true' : 'false'} rotate={langActive ? 'true' : 'false'}/>
					</Button>
				</Content>
				<DropDown dark={dark} show={langActive}>
					<DropDownButton dark={dark} onClick={() => {
						changeLang('ru');
					}}>Русский</DropDownButton>
					<DropDownButton dark={dark} onClick={() => {
						changeLang('en');
					}}>English</DropDownButton>
				</DropDown>
			</Wrap>
		</>
	);
};

export default HeaderLang;
