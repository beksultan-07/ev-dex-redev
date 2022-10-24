import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import SearchIcon from '../../../assets/dex_info/search.svg';

const Wrap = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	flex-direction: column;
`;
const InputFieldBlock = styled.div`
	width: 300px;
  position: relative;
`;
const InputField = styled.input`
  background: #FFFFFF;
  border: 1px solid #E8E8EA;
  border-radius: 22px;
	outline: none;
	width: 100%;
	height: 40px;
	padding: 0 30px;
`;
const Icon = styled.img`
  position: absolute;
	left: 11px;
	top: 11px;
`;
const LinkBlock = styled.div``;
const Link = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 116.19%;
  color: rgba(255, 255, 255, 0.7);
	cursor: pointer;
`;
const LinkSpan = styled.span`
	text-decoration: underline;
`;

const Search: React.FC = () => {
	const [t] = useTranslation();
	return (
		<>
			<Wrap>
				<InputFieldBlock>
					<Icon src={SearchIcon as string} alt={SearchIcon as string}/>
					<InputField/>
				</InputFieldBlock>
				<LinkBlock>
					<Link href="#">
						{t('dexInfo.question.text')}
						<LinkSpan>
							{t('dexInfo.question.text')}
						</LinkSpan>
					</Link>
				</LinkBlock>
			</Wrap>
		</>
	);
};

export default Search;
