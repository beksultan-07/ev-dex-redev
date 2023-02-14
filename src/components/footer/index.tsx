import React from 'react';
import {ReactComponent as Facebook} from '../../assets/footer/facebook.svg';
import {ReactComponent as Instagram} from '../../assets/footer/instagram.svg';
import {ReactComponent as Twitter} from '../../assets/footer/twitter.svg';
import {ReactComponent as Linkedin} from '../../assets/footer/linkedin.svg';
import {ReactComponent as Youtube} from '../../assets/footer/youtube.svg';
import {ReactComponent as Whatsapp} from '../../assets/footer/whatsapp.svg';
import styled from 'styled-components';
import {useSvgComponent} from '../../hooks/useSvgComponent';
import {useTranslation} from 'react-i18next';

const Wrap = styled.section`
  position: relative;
  padding: 60px 0 0 0;
  background: #111A23;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 860px ) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }
`;
const JoinWrap = styled.div``;
const JoinTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: calc(25 / 24 * 100%);
  color: #FFFFFF;
  margin-bottom: 20px;
`;
const JoinText = styled.p`
	max-width: 430px;
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

  svg {
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

  ::placeholder {
    font-weight: 400;
    font-size: 13px;
    color: #7C7C7C;
  }
`;
const LinksLists = styled.div`
  display: grid;
  max-width: 560px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 155px);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const LinksBlock = styled.div``;
const LinkTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
  margin-bottom: 34px;
`;
const LinksList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex-direction: column;
`;
const LinkItem = styled.li``;
const FooterLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: calc(10 / 14 * 100%);
  color: #FFFFFF;
  transition: .3s ease-in-out;
  cursor: pointer;

  :hover {
    color: rgb(244, 128, 32);
  }
`;
const Copy = styled.div`
  text-align: center;
  padding: 30px 0;
  width: 100%;
`;
const CopyText = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;

const Footer: React.FC = () => {
	const {t, i18n} = useTranslation();
	const socialLinks = [
		{icon: FacebookIcon, href: '#'},
		{icon: InstagramIcon, href: '#'},
		{icon: TwitterIcon, href: ''},
		{icon: LinkedinIcon, href: '#'},
		{icon: YoutubeIcon, href: '#'},
		{icon: WhatsappIcon, href: '#'},
	];
	const companyLinks = [
		{text: {en: 'Develop', ru: 'Develop'}, href: '#'},
		{text: {en: 'Economy', ru: 'Эконом'}, href: '#'},
		{text: {en: 'Tech', ru: 'Технология'}, href: '#'},
		{text: {en: 'Community', ru: 'Сообщество'}, href: '#'},
		{text: {en: 'About', ru: 'О нас'}, href: '#'},
		{text: {en: 'Blog', ru: 'Блог'}, href: '#'},
	];
	const technologyLinks = [
		{text: {en: 'Documentation', ru: 'Документация'}, href: '#'},
		{text: {en: 'Testnet ', ru: 'Тестовая сеть'}, href: '#'},
		{text: {en: 'ERTP: Electronic Right Transfer Protocol', ru: 'ERTP: Electronic Right Transfer Protocol'}, href: '#'},
		{text: {en: 'Zoe: Offer-Safety Enforcement', ru: 'Zoe: Offer-Safety Enforcement'}, href: '#'},
		{text: {en: 'SES: Secure ECMAScript', ru: 'SES: Secure ECMAScript'}, href: '#'},
		{text: {en: 'IBC', ru: 'IBC'}, href: '#'},
		{text: {en: 'Change Logs', ru: 'Журналы изменений'}, href: '#'},
	];
	const legalLinks = [
		{text: {en: 'Terms and Conditions', ru: 'Условия и положения'}, href: '#'},
		{text: {en: 'Privacy Policy', ru: 'Политика конфиденциальности'}, href: '#'},
	];

	return (
		<>
			<Wrap>
				<Content>
					<JoinWrap>
						<JoinTitle>{t('footer.title')}</JoinTitle>
						<JoinText>{t('footer.text')}</JoinText>
						<IconsBlock>
							{socialLinks.map((link, index) => (
								<Link href={link.href} target="_blank" key={index}>{useSvgComponent(link.icon)}</Link>
							))}
						</IconsBlock>
						<EmailBlock>
							<Email placeholder={'Email address'} type={'email'}/>
						</EmailBlock>
					</JoinWrap>
					<LinksLists>
						<LinksBlock>
							<LinkTitle>{t('footer.nav.col1.title')}</LinkTitle>
							<LinksList>
								{companyLinks.map((companyLink, index) => (
									<LinkItem key={index}>
										<FooterLink
											href={companyLink.href}>{companyLink.text[i18n.language as keyof typeof companyLink.text]}</FooterLink>
									</LinkItem>
								))}
							</LinksList>
						</LinksBlock>
						<LinksBlock>
							<LinkTitle>{t('footer.nav.col2.title')}</LinkTitle>
							<LinksList>
								{technologyLinks.map((technologyLink, index) => (
									<LinkItem key={index}>
										<FooterLink href={technologyLink.href}>{technologyLink.text[i18n.language as keyof typeof technologyLink.text]}</FooterLink>
									</LinkItem>
								))}
							</LinksList>
						</LinksBlock>
						<LinksBlock>
							<LinkTitle>{t('footer.nav.col3.title')}</LinkTitle>
							<LinksList>
								{legalLinks.map((legalLink, index) => (
									<LinkItem key={index}>
										<FooterLink href={legalLink.href}>{legalLink.text[i18n.language as keyof typeof legalLink.text]}</FooterLink>
									</LinkItem>
								))}
							</LinksList>
						</LinksBlock>
					</LinksLists>
				</Content>
				<Copy>
					<CopyText>{t('footer.textBottom')}</CopyText>
				</Copy>
			</Wrap>
		</>
	);
};

export default Footer;
