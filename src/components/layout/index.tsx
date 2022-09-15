import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import Cookie from '../cookie';

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

const Layout: React.FC<Props> = ({dark, setDark, children}) => {
	const [confirmCookie, setConfirmCookie] = useState(false);
	const confirmCookieSaveOnStorage = () => {
		localStorage.setItem('cookie', JSON.stringify(true));
		setConfirmCookie(false);
	};

	React.useEffect(() => {
		const cookieFromStorage = localStorage.getItem('cookie');
		if (cookieFromStorage) {
			setConfirmCookie(false);
		} else {
			setConfirmCookie(true);
		}
	});

	return (
		<>
			<LayoutWrap>
				<Cookie confirm={confirmCookie} setConfirmVisibility={confirmCookieSaveOnStorage}/>
				<Header dark={dark} setDark={setDark}/>
				<LayoutInside>
					{children}
				</LayoutInside>
				<Footer/>
			</LayoutWrap>
		</>
	);
};

export default Layout;
