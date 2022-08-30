import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../header';

type Props = {
	children: any;
};
const LayoutWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LayoutInside = styled.div`
  flex: 1 1 auto;
  padding: 67px 0 0 0;

  @media(max-width: 1126px){
    padding: 65px 0 0 0;
  }
`;
const Layout: React.FC<Props> = props => {
	const [langActive, setLangActive] = React.useState(true);
	useEffect(() => {
		console.log(langActive);
	}, []);

	return (
		<>
			<LayoutWrap onClick={() => {
				setLangActive(false);
			}}>
				<Header langActive={langActive} setLangActive={setLangActive}/>
				<LayoutInside>
					{props.children}
				</LayoutInside>
			</LayoutWrap>
		</>

	);
};

export default Layout;
