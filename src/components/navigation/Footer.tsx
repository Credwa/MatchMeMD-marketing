import bg from '../../assets/images/bg.svg';
import FooterNavItem from '@/components/navigation/FooterNavItem';
import React from 'react';
import SocialMedia from '@/components/ui/SocialMedia';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
const { Title, Paragraph } = Typography;

const StyledFooterHero = styled.footer`
  background-image: url(${bg}) !important;
  padding: ${VALUES.PAGE_PADDING};
  padding-top: 3rem;
  width: 100vw;
`;

const FooterContainer = styled.div`
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 0.5fr 2fr;
    padding: ${VALUES.PAGE_PADDING};
    grid-row-gap: 0.8rem;
    grid-template-areas:
      'Logo SocialMedia Products Company Help'
      'Tagline Tagline Products Company Help'
      'FooterNavLinks FooterNavLinks Products Company Help'
      'Copyright Copyright . ExtraLinks ExtraLinks';
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
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
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    display: flex;
    margin: 0;
    justify-content: space-between;
    grid-column-gap: 0;
  }
`;

const FooterHr = styled.hr`
  color: ${COLORS.MMD_BACKGROUND};
  margin: 1.5rem -1.875rem 1.5rem -1.875rem;
`;

const SocialMediaItems = styled.div`
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    grid-area: SocialMedia;
  }
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

  const isTabletScreen = useMediaQuery({ minWidth: VALUES.TABLET_MIN_WIDTH });

  return (
    <StyledFooterHero>
      {!isTabletScreen ? (
        // mobile view footer
        <FooterContainer>
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
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Products
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Pricing
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Our Company
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
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
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Video platform
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Discussion forum
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Challenges
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
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
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                About Us
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
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
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Support
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                FAQ
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Report issue
              </FooterNavItem>
            </FooterExtraLinks>

            <SocialMediaItems>
              <SocialMedia socialMedia="facebook" link="https://facebook.com" height={42} width={42} />
              <SocialMedia socialMedia="twitter" link="https://twitter.com" height={42} width={42} />
              <SocialMedia
                socialMedia="instagram"
                link="https://www.instagram.com/matchmemd/"
                height={42}
                width={42}
              />
              <SocialMedia
                socialMedia="youtube"
                link="https://www.youtube.com/channel/UCAzdRrxgydaA3_h5JL4iYUA"
                height={42}
                width={42}
              />
            </SocialMediaItems>

            <FooterExtraLinks>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Privacy policy
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Terms of use
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Terms of Subscription
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Cookie policy
              </FooterNavItem>
            </FooterExtraLinks>

            <Paragraph
              style={{
                gridArea: 'CopyRight',
                color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
                margin: `${VALUES.PAGE_IGNORE_PADDING}`,
                padding: '3rem 0',
                opacity: `${VALUES.TEXT_OPACITY}`
              }}
            >
              © MatchMeMD {new Date().getFullYear()}. All Rights Reserved
            </Paragraph>
          </FooterExtraLinksContainer>
        </FooterContainer>
      ) : (
        // Tablet or desktop footer view
        <FooterContainer>
          <FooterNavItem link="/" style={{ gridArea: 'Logo', alignSelf: 'flex-start' }}>
            <img
              src={data.icon.publicURL}
              alt="MatchMeMD Icon"
              style={
                isTabletScreen
                  ? { height: '2.5rem', width: '2.5rem' }
                  : { height: '2.5rem', width: '2.5rem', marginBottom: '1rem' }
              }
            />
          </FooterNavItem>

          <SocialMediaItems style={{ gridArea: 'SocialMedia', alignSelf: 'flex-start', justifySelf: 'flex-start' }}>
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

          <Title
            level={3}
            style={{
              color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
              gridArea: 'Tagline',
              alignSelf: 'center'
            }}
          >
            Creating perfect medical matches
          </Title>

          <FooterNavLinks
            style={{
              gridArea: 'FooterNavLinks',
              alignSelf: 'flex-start'
            }}
          >
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Products
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Pricing
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Our Company
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Contact
            </FooterNavItem>
          </FooterNavLinks>

          <div
            style={{
              gridArea: 'Products',
              display: 'flex',
              flexDirection: 'column',
              justifySelf: 'flex-end'
            }}
          >
            <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
              Products
            </Title>
            <FooterExtraLinks style={{ flexDirection: 'column' }}>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Video platform
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Discussion forum
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Challenges
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Mobile App
              </FooterNavItem>
            </FooterExtraLinks>
          </div>

          <div
            style={{
              gridArea: 'Company',
              display: 'flex',
              flexDirection: 'column',
              justifySelf: 'flex-end'
            }}
          >
            <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
              Our company
            </Title>
            <FooterExtraLinks style={{ flexDirection: 'column' }}>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                About Us
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Testimonials
              </FooterNavItem>
            </FooterExtraLinks>
          </div>

          <div
            style={{
              gridArea: 'Help',
              display: 'flex',
              flexDirection: 'column',
              justifySelf: 'flex-end'
            }}
          >
            <Title level={4} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
              Help
            </Title>
            <FooterExtraLinks style={{ flexDirection: 'column' }}>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Support
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                FAQ
              </FooterNavItem>
              <FooterNavItem
                link="/subscribe/"
                style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
              >
                Report issue
              </FooterNavItem>
            </FooterExtraLinks>
          </div>

          <Paragraph
            style={{
              gridArea: 'Copyright',
              color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
              opacity: `${VALUES.TEXT_OPACITY}`,
              alignSelf: 'center',
              marginBottom: '0'
            }}
          >
            © MatchMeMD {new Date().getFullYear()}. All Rights Reserved
          </Paragraph>

          <FooterExtraLinks
            style={{
              gridArea: 'ExtraLinks'
            }}
          >
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Privacy policy
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Terms of use
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Terms of Subscription
            </FooterNavItem>
            <FooterNavItem
              link="/subscribe/"
              style={{ color: `${COLORS.MMD_BACKGROUND}`, opacity: `${VALUES.FOOTER_LINK_OPACITY}` }}
            >
              Cookie policy
            </FooterNavItem>
          </FooterExtraLinks>
        </FooterContainer>
      )}
    </StyledFooterHero>
  );
};

export default Footer;
