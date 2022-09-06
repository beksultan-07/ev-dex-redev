import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

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

  @media(max-width: 960px){
    padding: 65px 0 0 0;
  }
`;
const Layout: React.FC<Props> = props => {
	const [langActive, setLangActive] = React.useState(false);

	return (
		<>
			<LayoutWrap onClick={() => {
				setLangActive(false);
			}}>
				<Header langActive={langActive} setLangActive={setLangActive}/>
				<LayoutInside>
					{props.children}
				</LayoutInside>
				<Footer/>
			</LayoutWrap>
		</>

	);
};

export default Layout;
