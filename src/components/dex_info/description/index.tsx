import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

type ReadMoreProps = {
	readMore: boolean;
};
const Wrap = styled.div`
  position: relative;
`;
const DescBlock = styled.div<ReadMoreProps>`
  padding: 40px 30px;
  background: #fff;
  border: 2px solid #F9F9F9;
  box-shadow: 27px 31px 100px -10px rgba(89, 42, 7, 0.05);
  border-radius: 16px;
  max-width: 880px;
  margin: 0 30px 50px 0;
  @media (max-width: 900px) {
    margin: 30px 0 50px 0;
  }
  @media (max-width: 600px) {
    padding: 20px 10px;
  }
  @media (max-width: 720px) {
    height: ${props => props.readMore ? '400px' : 'auto'};
    overflow: hidden;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;

  :last-child {
    margin: 0;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: calc(22 / 18 * 100%);
  margin-bottom: 22px;
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(16 / 14 * 100%);
  color: #55687B;
  max-width: 820px;
`;
type ReadMoreBtnProps = {
	show: boolean;
};
const ReadMoreButton = styled.button<ReadMoreBtnProps>`
  visibility: hidden;
  background: none;
  outline: none;
  border: none;
  font-weight: 400;
  font-size: 16px;
  color: #55687B;
  position: absolute;
	bottom: 30px;
	left: 10px;
  @media (max-width: 720px) {
    visibility: visible;
  }
`;

type DescriptionType = {
	id: string;
	title: string;
	texts: string[];
};

const Description: React.FC = () => {
	const [t] = useTranslation();

	const [descroptions, setDescroptions] = useState<DescriptionType[]>([
		{
			id: 'EVDEX',
			title: t('dexInfo.dex.block.title'),
			texts: [
				t('dexInfo.dex.block.text1'),
			],
		},
	]);

	useEffect(() => {
		setDescroptions([
			{
				id: 'EVDEX',
				title: t('dexInfo.dex.block.title'),
				texts: [
					t('dexInfo.dex.block.text1'),
					t('dexInfo.dex.block.text2'),
					t('dexInfo.dex.block.text3'),
					t('dexInfo.dex.block.text4'),
					t('dexInfo.dex.block.text5'),
					t('dexInfo.dex.block.text6'),
					t('dexInfo.dex.block.text7'),
					t('dexInfo.dex.block.text8'),
					t('dexInfo.dex.block.text9'),
					t('dexInfo.dex.block.text10'),
					t('dexInfo.dex.block.text11'),
					t('dexInfo.dex.block.text12'),
					t('dexInfo.dex.block.text13'),
					t('dexInfo.dex.block.text14'),
					t('dexInfo.dex.block.text15'),
					t('dexInfo.dex.block.text16'),
					t('dexInfo.dex.block.text17'),
				],
			},
			{
				id: 'farming',
				title: t('dexInfo.farming.title'),
				texts: [
					t('dexInfo.farming.block.text1'),
					t('dexInfo.farming.block.text2'),
					t('dexInfo.farming.block.text3'),
					t('dexInfo.farming.block.text4'),
				],
			},
			{
				id: 'tokenized-assets',
				title: t('dexInfo.tokenized-assets.title'),
				texts: [
					t('dexInfo.tokenized-assets.block.text1'),
					t('dexInfo.tokenized-assets.block.text2'),
					t('dexInfo.tokenized-assets.block.text3'),
					t('dexInfo.tokenized-assets.block.text4'),
					t('dexInfo.tokenized-assets.block.text5'),
					t('dexInfo.tokenized-assets.block.text6'),
					t('dexInfo.tokenized-assets.block.text7'),
					t('dexInfo.tokenized-assets.block.text8'),
					t('dexInfo.tokenized-assets.block.text9'),
					t('dexInfo.tokenized-assets.block.text10'),
				],
			},
			{
				id: 'launchpad',
				title: t('dexInfo.launchpad.title'),
				texts: [
					t('dexInfo.launchpad.block.text1'),
					t('dexInfo.launchpad.block.text2'),
					t('dexInfo.launchpad.block.text3'),
					t('dexInfo.launchpad.block.text4'),
					t('dexInfo.launchpad.block.text5'),
					t('dexInfo.launchpad.block.text6'),
					t('dexInfo.launchpad.block.text7'),
					t('dexInfo.launchpad.block.text8'),
					t('dexInfo.launchpad.block.text9'),
				],
			},
			{
				id: 'IDO',
				title: t('dexInfo.IDO.title'),
				texts: [
					t('dexInfo.IDO.block.text1'),
					t('dexInfo.IDO.block.text2'),
					t('dexInfo.IDO.block.text3'),
					t('dexInfo.IDO.block.text4'),
					t('dexInfo.IDO.block.text5'),
					t('dexInfo.IDO.block.text6'),
					t('dexInfo.IDO.block.text7'),
					t('dexInfo.IDO.block.text8'),
					t('dexInfo.IDO.block.text9'),
					t('dexInfo.IDO.block.text10'),
					t('dexInfo.IDO.block.text11'),
					t('dexInfo.IDO.block.text12'),
					t('dexInfo.IDO.block.text13'),
					t('dexInfo.IDO.block.text14'),
					t('dexInfo.IDO.block.text15'),
					t('dexInfo.IDO.block.text16'),
					t('dexInfo.IDO.block.text17'),
				],
			},
			{
				id: 'STO',
				title: t('dexInfo.STO.title'),
				texts: [
					t('dexInfo.STO.block.text1'),
					t('dexInfo.STO.block.text2'),
				],
			},
		]);
	}, [t]);

	const [readMore, setReadMore] = React.useState(true);

	return (
		<>
			<Wrap>
				<DescBlock readMore={readMore}>
					{descroptions.map((desc, index) => (
						<React.Fragment key={index}>
							<Title id={desc.id}>{desc.title}</Title>
							<Content>
								{desc.texts.map((text, index) => (
									<Desc key={index}>{text}</Desc>
								))}
							</Content>
						</React.Fragment>
					))}
				</DescBlock>

				<ReadMoreButton
					show={readMore}
					onClick={() => {
						setReadMore(r => !r);
					}}>
					{readMore ? 'Read more...' : 'Hide'}
				</ReadMoreButton>

			</Wrap>
		</>

	);
};

export default Description;
