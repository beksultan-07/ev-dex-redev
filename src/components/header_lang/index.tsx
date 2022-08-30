import React, {useState} from 'react';
import styled from 'styled-components';
import Web from '../../assets/lang/web.svg';
import Arrow from '../../assets/lang/arrow-down.svg';

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
  @media (max-width: 1125px){
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
const Text = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(21 / 18 * 100%);
  color: #133D65;
  display: none;
  @media (max-width: 1125px) {
    display: block;
  }
`;
const WebIcon = styled.img``;

type ArrowIconProps = {
	rotate: boolean;
};
const ArrowIcon = styled.img<ArrowIconProps>`
  transform: rotate(${props => props.rotate ? '180deg' : 'none'});
  transition: .3s ease-in-out;
`;
type DropDownProps = {
	show: boolean;
};
const DropDown = styled.div<DropDownProps>`
  padding: 30px 15px;
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  position: absolute;
  top: ${props => props.show ? '100%' : '40%'};
  left: -20px;
  z-index: -1;
  background: #fff;
  box-shadow: 0px 217px 130px rgba(0, 0, 0, 0.01), 0px 97px 97px rgba(0, 0, 0, 0.01), 0px 24px 53px rgba(0, 0, 0, 0.01), 0px 0px 0px rgba(0, 0, 0, 0.01);
  border-radius: 0px 0px 8px 8px;
  transition: .3s ease-in-out;
  @media (max-width: 1125px) {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(42.1005px);
    padding: 32px;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
const DropDownButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  color: #133D65;
  cursor: pointer;
  transition: .3s;
  border: none;
  background: transparent;
  margin-bottom: 20px;
  :last-child{
    margin: 0;
  }
  :hover {
    color: #045599;
    font-weight: 600;
    font-size: 16px;
  }
`;
type Props = {
	langActive: boolean;
	setLangActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeaderLang: React.FC<Props> = ({langActive, setLangActive}) => (
	<>
		<Wrap>
			<Content>
				<Text> Русский </Text>
				<Button onClick={() => {
					console.log('langActive');
					setLangActive(val => !val);
				}}>
					<WebIcon src={Web as string}/>
					<ArrowIcon src={Arrow as string} rotate={langActive}/>
				</Button>
			</Content>
			<DropDown show={langActive}>
				<DropDownButton>Русский</DropDownButton>
				<DropDownButton>English</DropDownButton>
			</DropDown>
		</Wrap>
	</>
);

export default HeaderLang;
