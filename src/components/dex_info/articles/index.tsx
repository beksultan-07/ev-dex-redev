import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const Wrap = styled.div`
	width: 100%;
	max-width: 300px;
`;
const Content = styled.div`
  background: #fff;
  border: 2px solid #F9F9F9;
  box-shadow: 27px 31px 100px -10px rgba(89, 42, 7, 0.05);
  border-radius: 16px;
  padding: 30px;
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #0F2B46;
  padding-bottom: 20px;
  border-bottom: 1px solid #E5E5E5;
	margin-bottom: 20px;
`;
const LinksList = styled.ul`
	display: flex;
	align-items: flex-start;
	gap: 20px;
	flex-direction: column;
`;
const LinksItem = styled.li``;
const LinksLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
	transition: .3s ease-in-out;
  color: #0F2B46;
  cursor: pointer;
	:hover{
    color: #F48020;
	}
	&.disable{
		color: #bebebe;
	}
`;

const Articles: React.FC = () => {
	const [links, setLinks] = useState([
		{href: '#', text: '', disable: false},
	]);

	const [t] = useTranslation();

	useEffect(() => {
		setLinks([
			{href: '#', text: t('dexInfo.nav.link1'), disable: false},
			{href: '#farming', text: t('dexInfo.nav.link2'), disable: false},
			{href: '#tokenized-assets', text: t('dexInfo.nav.link3'), disable: false},
			{href: '#launchpad', text: t('dexInfo.nav.link4'), disable: false},
			{href: '#IDO', text: t('dexInfo.nav.link5'), disable: false},
			{href: '#STO', text: t('dexInfo.nav.link6'), disable: false},
			{href: '#', text: t('dexInfo.nav.link7'), disable: true},
			{href: '#', text: t('dexInfo.nav.link8'), disable: true},
		]);
	}, [t]);

	return (
		<>
			<Wrap>
				<Content>
					<Title>{t('dexInfo.nav.title')}</Title>
					<LinksList>
						{links.map((link, index) => (
							<LinksItem key={index}>
								<LinksLink href={link.href} className={link.disable ? 'disable' : ''}>{link.text}</LinksLink>
							</LinksItem>
						))}
					</LinksList>
				</Content>
			</Wrap>
		</>
	);
};

export default Articles;
