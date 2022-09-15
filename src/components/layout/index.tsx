import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const LayoutWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const LayoutInside = styled.div`
  flex: 1 1 auto;
`;
type Props = {
	children: any;
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout: React.FC<Props> = ({dark, setDark, children}) => (
	<>
		<LayoutWrap>
			<Header dark={dark} setDark={setDark} />
			<LayoutInside>
				{children}
			</LayoutInside>
			<Footer/>
		</LayoutWrap>
	</>
);

export default Layout;
