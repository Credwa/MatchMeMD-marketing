import FooterNavItem from '@/components/navigation/FooterNavItem';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';

const { Title } = Typography;

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
  height: 10rem;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  max-width: ${VALUES.PAGE_MAX_WIDTH};
  margin-left: auto;
  margin-right: auto;
`;

const FooterNavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  max-width: ${VALUES.PAGE_MAX_WIDTH};
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
            <img src={data.icon.publicURL} alt="MatchMeMD Icon" style={{ height: '2.5rem', width: '2.5rem' }} />
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
      </div>
    </StyledFooterHero>
  );
};

export default Footer;
