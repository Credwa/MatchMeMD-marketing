import FooterNavItem from '@/components/navigation/FooterNavItem';
import React from 'react';
import SocialMedia from '@/components/ui/SocialMedia';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';

const { Title, Paragraph } = Typography;

const StyledFooterHero = styled.footer`
  background: ${COLORS.MMD_HERO_BACKGROUND};
  padding: ${VALUES.PAGE_PADDING};
  padding-top: 3rem;
  width: 100vw;
  max-width: ${VALUES.PAGE_MAX_WIDTH};
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: ${VALUES.PAGE_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
`;

const FooterNavLinks = styled.nav`
  display: flex;
  margin-top: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: ${VALUES.PAGE_MAX_WIDTH};
`;

const FooterExtraLinksContainer = styled.nav`
  padding: ${VALUES.PAGE_PADDING};
  margin-top: 3rem;
`;

const FooterExtraLinks = styled.nav`
  margin: ${VALUES.PAGE_IGNORE_PADDING};
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 0.8rem;
  grid-column-gap: 15%;
`;

const FooterHr = styled.hr`
  color: ${COLORS.MMD_BACKGROUND};
  margin: 1.5rem -1.875rem 1.5rem -1.875rem;
`;

const SocialMediaItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface Props {}

const Footer: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "MatchMeMD-icon.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <StyledFooterHero>
      <div style={{ maxWidth: `${VALUES.PAGE_MAX_WIDTH}` }}>
        <FooterNav>
          <FooterNavItem link="/">
            <img
              src={data.icon.publicURL}
              alt="MatchMeMD Icon"
              style={{ height: '2.5rem', width: '2.5rem', marginBottom: '1rem' }}
            />
          </FooterNavItem>

          <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}`, margin: `${VALUES.PAGE_IGNORE_PADDING}` }}>
            Creating perfect medical matches
          </Title>
          <FooterNavLinks>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Products
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Pricing
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Our Company
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Contact
            </FooterNavItem>
          </FooterNavLinks>
        </FooterNav>

        <FooterExtraLinksContainer>
          <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}`, margin: `${VALUES.PAGE_IGNORE_PADDING}` }}>
            Products
          </Title>
          <FooterExtraLinks>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Video platform
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Discussion forum
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Challenges
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Mobile App
            </FooterNavItem>
          </FooterExtraLinks>
          <FooterHr />

          <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}`, margin: `${VALUES.PAGE_IGNORE_PADDING}` }}>
            Our company
          </Title>
          <FooterExtraLinks>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              About Us
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Testimonials
            </FooterNavItem>
          </FooterExtraLinks>
          <FooterHr />

          <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}`, margin: `${VALUES.PAGE_IGNORE_PADDING}` }}>
            Help
          </Title>
          <FooterExtraLinks>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Support
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              FAQ
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Report issue
            </FooterNavItem>
          </FooterExtraLinks>

          <SocialMediaItems>
            <SocialMedia socialMedia="facebook" link="https://facebook.com" height={42} width={42} />
            <SocialMedia socialMedia="twitter" link="https://twitter.com" height={42} width={42} />
            <SocialMedia socialMedia="instagram" link="https://www.instagram.com/matchmemd/" height={42} width={42} />
            <SocialMedia
              socialMedia="youtube"
              link="https://www.youtube.com/channel/UCAzdRrxgydaA3_h5JL4iYUA"
              height={42}
              width={42}
            />
          </SocialMediaItems>

          <FooterExtraLinks>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Privacy policy
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Terms of use
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Terms of Subscription
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Cookie policy
            </FooterNavItem>
          </FooterExtraLinks>

          <Paragraph
            style={{
              color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
              margin: `${VALUES.PAGE_IGNORE_PADDING}`,
              padding: '3rem 0',
              opacity: `${VALUES.TEXT_OPACITY}`
            }}
          >
            © MatchMeMD {new Date().getFullYear()}. All Rights Reserved
          </Paragraph>
        </FooterExtraLinksContainer>
      </div>
    </StyledFooterHero>
  );
};

export default Footer;
