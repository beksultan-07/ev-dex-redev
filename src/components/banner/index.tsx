import React from 'react';
import styled from 'styled-components';
import {Button, ButtonOutline, Container, Wrap} from '../../UI/UI';
import VideoItem from '../../assets/banner/banner.mp4';
import {ReactComponent as Telegram} from '../../assets/social/telegram.svg';
import {ReactComponent as Facebook} from '../../assets/social/facebook.svg';
import {ReactComponent as Github} from '../../assets/social/github.svg';
import {ReactComponent as Intersect} from '../../assets/social/intersect.svg';
import {ReactComponent as Youtube} from '../../assets/social/youtube.svg';
import {ReactComponent as Twitter} from '../../assets/social/twitter.svg';
import {useSvgComponent} from '../../hooks/useSvgComponent';
import {useTranslation} from 'react-i18next';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 65px 0;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;
const ContentText = styled.div`
  max-width: 564px;
`;
const Title = styled.h1`
  font-family: 'Exo 2';
  font-weight: 700;
  font-size: 48px;
  line-height: calc(58 / 48 * 100%);
  color: #0F2B46;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 475px) {
    font-size: 34px;
  }
`;
const YellowTitle = styled.span`
  font-style: italic;
  color: #F48020;

  :before {
    content: '';
    display: inline-block;
    width: 225px;
    height: 6px;
    background: linear-gradient(270deg, #F48020 0%, rgba(244, 128, 32, 0) 74.22%);
    border-radius: 6px;
    margin: 0 8px 10px 0;
    @media (max-width: 485px) {
      width: 127px;
    }
  }
`;
const Desc = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: calc(21 / 18 * 100%);
  color: #0F2B46;
  max-width: 515px;
  margin-bottom: 25px;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 65px;
	@media(max-width: 375px){
		gap: 20px;
	}
	.banner__button{
		@media(max-width: 355px){
			font-size: 11px;
		}
	}
`;
const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 960px) {
    justify-content: center;
  }
`;
const SocialLink = styled.a`
  cursor: pointer;

  svg {
    transition: .3s ease-in-out;
    fill: #949BA0;
  }

  :hover {
    svg {
      fill: #282c34;
    }
  }
`;
const TelegramIcon = styled(Telegram)``;
const FacebookIcon = styled(Facebook)``;
const TwitterIcon = styled(Twitter)``;
const YoutubeIcon = styled(Youtube)``;
const IntersectIcon = styled(Intersect)``;
const GithubIcon = styled(Github)``;
const VideoWrap = styled.div`
  flex: 1.5;
  position: relative;
  padding: 0px 0px 50% 0px;
  @media (max-width: 960px) {
    width: 100%;
    padding: 0px 0px 82% 0px;
    margin: 0px 0px 20px 0px;
  }
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Banner: React.FC = () => {
	const [t] = useTranslation();
	const icons = [
		{icon: TelegramIcon, href: 'https://web.telegram.org/k/'},
		{icon: FacebookIcon, href: 'https://www.facebook.com/'},
		{icon: TwitterIcon, href: 'https://twitter.com'},
		{icon: GithubIcon, href: 'https://github.com/'},
		{icon: YoutubeIcon, href: 'https://www.youtube.com/'},
		{icon: IntersectIcon, href: 'https://about.gitlab.com/'},
	];
	return (

		<>
			<Wrap bg={false}>
				<Container>
					<Content>
						<ContentText>
							<Title>Безопасность <YellowTitle>Скорость</YellowTitle> Ликвидность</Title>
							<Desc>Envoys Vision - это доступность к финансовым рынкам, безопасность инвестирования в стартапы, высокая
								доходность для поставщиков ликвидности!</Desc>
							<ButtonWrap>
								<Button className="banner__button" unvisible={false} target="_blank" href="https://app.envoys.vision/swap">
									{t('home.banner.btn1')}
								</Button>
								<ButtonOutline className="banner__button" soon={false} white={false} to="/dex-info">
									{t('home.banner.btn2')}
								</ButtonOutline>
							</ButtonWrap>
							<SocialWrap>
								{icons.map((icon, index) => (
									<SocialLink target="_blank" href={icon.href} key={index}>{useSvgComponent(icon.icon)}</SocialLink>))}
							</SocialWrap>
						</ContentText>
						<VideoWrap>
							<Video autoPlay={true} loop muted={true} playsInline={true}>
								<source src={VideoItem as string}/>
							</Video>
						</VideoWrap>
					</Content>
				</Container>
			</Wrap>
		</>
	);
};

export default Banner;
