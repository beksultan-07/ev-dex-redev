import React from 'react';
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
	const links = [
		{href: '#', text: 'Что такое DEX биржа ?', disable: false},
		{href: '#farming', text: 'Что такое фарминг ?', disable: false},
		{href: '#tokenized-assets', text: 'Токенизированные компании', disable: false},
		{href: '#launchpad', text: 'Что такое Launchpad ?', disable: false},
		{href: '#IDO', text: 'Что такое IDO ?', disable: false},
		{href: '#STO', text: 'Что такое STO ?', disable: false},
		{href: '#', text: 'Кошелек Envoys Vision ', disable: true},
		{href: '#', text: 'Криптокредиты и “Landing” криптовалюты', disable: true},
	];
	return (
		<>
			<Wrap>
				<Content>
					<Title>Статьи в этом разделе</Title>
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
