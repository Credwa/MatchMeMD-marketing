import Ellipse from '@/components/ui/Ellipse';
import Fade from 'react-reveal/Fade';
import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';
import { navigate } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;
const Section = styled.section`
  display: grid;

  @media (min-width: 768px) {
    margin-top: 5rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 30% auto;
    grid-template-areas:
      'CTA img'
      'CTA img'
      '. img';
  }

  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 5rem 0 7rem;
  flex-wrap: wrap;
  max-width: 31.5rem;
  @media (max-width: ${VALUES.SMALL_IPHONE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  max-height: 40rem;
  z-index: 1200 !important;
`;

const CTASection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "landing-image.svg" }) {
        publicURL
        relativePath
      }
    }
  `);

  const isLargeScreen = useMediaQuery({ minWidth: VALUES.PAGE_MAX_WIDTH });

  const isExtraSmallScreen = useMediaQuery({ maxWidth: VALUES.SMALL_IPHONE_BREAKPOINT });

  let buttonStyle: any = {
    fontSize: '1rem',
    width: '48%',
    minWidth: '8.5rem',
    maxWidth: '15rem'
  };

  if (isExtraSmallScreen) {
    buttonStyle = { ...buttonStyle, marginTop: '1rem', width: '25rem' };
  }

  let containerStyle = {};
  if (isLargeScreen) {
    containerStyle = {
      width: '100vw',
      margin: 'auto'
    };
  }

  return (
    <div style={containerStyle}>
      <Section>
        <Ellipse color="secondary" height={5} width={5} top={30} left={-2} />
        <Ellipse color="primary" height={7} width={7} top={26} right={0.1} />
        <div className="CTA">
          <Fade left>
            <Title level={2} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
              Become the perfect medical match
            </Title>
          </Fade>
          <Fade left>
            <Paragraph
              style={{
                fontSize: VALUES.FONT_16.SIZE,
                lineHeight: VALUES.FONT_16.LINE_HEIGHT,
                color: `${COLORS.MMD_PRIMARY_9}`,
                maxWidth: '40rem',
                opacity: `${VALUES.TEXT_OPACITY}`
              }}
            >
              MatchMeMD provides a unique approach on educational content for the USMLE. Designed especially for
              medical students and residents preparing for STEP 2 CK, CS and STEP 3 CCS.
            </Paragraph>
          </Fade>
          <CTAButtons>
            <Fade left>
              <MDButton
                type="primary"
                size="large"
                style={{
                  backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
                  borderColor: `${COLORS.MMD_SECONDARY_4}`,
                  ...buttonStyle
                }}
                onClick={event => navigate('/subscribe')}
              >
                Start a free trial
              </MDButton>
            </Fade>
            <Fade right>
              <MDButton
                ghost
                type="primary"
                size="large"
                style={{
                  color: `${COLORS.MMD_PRIMARY_8}`,
                  borderColor: `${COLORS.MMD_PRIMARY_8}`,
                  ...buttonStyle
                }}
                onClick={event => navigate('/subscribe')}
              >
                See pricing
              </MDButton>
            </Fade>
          </CTAButtons>
        </div>

        <div style={{ zIndex: 1000 }}>
          <Img
            src={data.landingImage.publicURL}
            alt="doctor looks at patient electronic chart tablet"
            style={{ marginBottom: '1rem' }}
          />
        </div>
      </Section>
    </div>
  );
};

export default CTASection;
