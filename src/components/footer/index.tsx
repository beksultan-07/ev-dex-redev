import React from 'react';
import {Container} from '../../UI/UI';
import {ReactComponent as Facebook} from '../../assets/footer/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/footer/instagram.svg';
import {ReactComponent as Twitter} from '../../assets/footer/twitter.svg';
import {ReactComponent as Linkedin} from '../../assets/footer/linkedin.svg';
import {ReactComponent as Youtube} from '../../assets/footer/youtube.svg';
import {ReactComponent as Whatsapp} from '../../assets/footer/whatsapp.svg';
import styled from 'styled-components';
import {useSvgComponent} from '../../hooks/useSvgComponent';

const Wrap = styled.section`
  position: relative;
	padding: 60px 0;
	background: #111A23;
`;
const Content = styled.div`
	padding: 60px 0;
`;
const JoinWrap = styled.div``;
const JoinTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(15 / 24 * 100%);
  color: #FFFFFF;
	margin-bottom: 20px;
`;
const JoinText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(15 / 14 * 100%);
  color: #FFFFFF;
	margin-bottom: 20px;
`;
const IconsBlock = styled.div`
	display: flex;
	gap: 13px;
	align-items: center;
	margin-bottom: 25px;
`;
const Link = styled.a`
	display: inline-block;
	svg{
		transition: .3s ease-in-out;
		fill: #000;
	}
  :hover {
    svg {
			fill: #F48020;
    }
  }
`;
const FacebookIcon = styled(Facebook)``;
const InstagramIcon = styled(Instagram)``;
const TwitterIcon = styled(Twitter)``;
const LinkedinIcon = styled(Linkedin)``;
const YoutubeIcon = styled(Youtube)``;
const WhatsappIcon = styled(Whatsapp)``;
const EmailBlock = styled.div`
	max-width: 315px;
`;
const Email = styled.input`
  background: #FFFFFF;
  border-radius: 8px;
	padding: 13px 16px;
  border: none;
	width: 100%;
	outline: none;
	::placeholder{
    font-weight: 400;
    font-size: 13px;
    color: #7C7C7C;
	}
`;

const Footer = () => {
	const links = [
		{icon: FacebookIcon, href: '#'},
		{icon: InstagramIcon, href: '#'},
		{icon: TwitterIcon, href: '#'},
		{icon: LinkedinIcon, href: '#'},
		{icon: YoutubeIcon, href: '#'},
		{icon: WhatsappIcon, href: '#'},
	];
	return (
		<>
			<Wrap>
				<Container>
					<JoinWrap>
						<JoinTitle>Join the community</JoinTitle>
						<JoinText>Join our active community of builders and partners</JoinText>
						<IconsBlock>
							{links.map((link, index) => (
								<Link href={link.href} key={index}>{useSvgComponent(link.icon)}</Link>
							))}
						</IconsBlock>
						<EmailBlock>
							<Email placeholder={'Email address'} type={'email'}/>
						</EmailBlock>
					</JoinWrap>
				</Container>
			</Wrap>
		</>
	);
};

export default Footer;
