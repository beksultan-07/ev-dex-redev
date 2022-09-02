import styled from 'styled-components';

type ContainerProps = {
	maxWidth?: string;
};
export const Container = styled.div<ContainerProps>`
  max-width: ${props => props.maxWidth ?? '1280px'};
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;
export const Wrap = styled.section`
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Button = styled.a`
  padding: 17px 30px;
  color: #ffff;
  font-size: 14px;
  font-weight: bold;
  background: #F48020;
  border-radius: 8px;
  cursor: pointer;
`;
export const ButtonOutline = styled.a`
  padding: 17px 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #0F2B46;
  border: 1px solid #F9F9F9;
  border-radius: 8px;
`;
type TitleProps = {
	textAlign: boolean;
	indentBottom: boolean;
};
export const Title = styled.h1<TitleProps>`
  font-family: 'Exo 2';
  font-weight: 700;
  font-size: 32px;
  line-height: calc(38 / 32 * 100%);
  color: #133D65;
  text-align: ${props => props.textAlign ? 'center' : 'none'};
  margin-bottom: ${props => props.indentBottom ? '120px' : '20px'};
	@media(max-width: 375px){
		font-size: 26px;
	}
`;

