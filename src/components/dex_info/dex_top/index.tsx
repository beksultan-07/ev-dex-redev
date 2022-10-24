import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import Search from '../search/index';

const Wrap = styled.div`
  margin-bottom: 75px;
  position: relative;
	z-index: 1;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;
const Info = styled.div``;
const Title = styled.h1`
  font-family: 'Exo 2';
  font-weight: 500;
  font-size: 48px;
  line-height: calc(58 / 48 * 100%);
  color: #FFFFFF;
  margin-bottom: 22px;
  @media (max-width: 551px) {
    font-size: 43px;
  }
  @media (max-width: 462px) {
    font-size: 38px;
  }

`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  max-width: 808px;
`;

const DexTop: React.FC = () => {
	const [t] = useTranslation();
	return (
		<>
			<Wrap>
				<Content>
					<Info>
						<Title>{t('dexInfo.dex.title')}</Title>
						<Desc>
							{t('dexInfo.dex.text')}
						</Desc>
					</Info>
					<Search/>
				</Content>
			</Wrap>
		</>
	);
};

export default DexTop;
