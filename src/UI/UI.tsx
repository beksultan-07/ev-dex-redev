import styled from 'styled-components';
import {Link} from 'react-router-dom';

type ContainerProps = {
	maxWidth?: string;
};
export const Container = styled.div<ContainerProps>`
  max-width: ${props => props.maxWidth ?? '1280px'};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;
type WrapProps = {
	bg: boolean;
};
export const Wrap = styled.section<WrapProps>`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.bg ? '#111A23' : '#fff'};
`;
type ButtonProps = {
	unvisible: boolean;
};
export const Button = styled.a<ButtonProps>`
  padding: 17px 30px;
  color: #ffff;
  font-size: 14px;
  font-weight: bold;
  background: #F48020;
  border-radius: 8px;
  cursor: pointer;
  transition: .3s ease-in-out;
	display: ${props => props.unvisible ? 'none' : 'inline-block'};
  :hover{
    background: rgb(223, 113, 22);
  }
`;
type ButtonOutlineProps = {
	white: boolean;
	soon: boolean;
};
export const ButtonOutline = styled(Link)<ButtonOutlineProps>`
  padding: 17px 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.white ? '#fff' : '#0F2B46'};
  border: 1px solid #F9F9F9;
  border-radius: 8px;
  cursor: ${props => props.soon ? 'not-allowed' : 'pointer'};
	transition: .3s ease-in-out;
	:hover{
		color: ${props => props.soon ? '#fff' : '#F48020'};
    border-color: ${props => props.soon ? '#fff' : '#F48020'};
	}
`;
type TitleProps = {
	textAlign: boolean;
	indentBottom?: string;
	color?: string;
	top?: string;
};
export const Title = styled.h1<TitleProps>`
  font-family: 'Exo 2';
  font-weight: 700;
  font-size: 32px;
  line-height: calc(38 / 32 * 100%);
  color: ${props => props.color ?? '#133D65'};
  text-align: ${props => props.textAlign ? 'center' : 'none'};
  margin-bottom: ${props => props.indentBottom ?? '20px'};
	padding-top: ${props => props.top ?? '0'};
  @media (max-width: 1070px) {
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 26px;
  }
`;

