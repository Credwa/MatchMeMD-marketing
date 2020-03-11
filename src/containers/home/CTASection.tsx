import Ellipse from '@/components/ui/Ellipse';
import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';
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
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 5rem 0 7rem;
  flex-wrap: wrap;
  max-width: 31.5rem;
`;

const Img = styled.img`
  max-height: 40rem;
  z-index: 1000;
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
          <Title level={2} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
            Become the perfect medical match
          </Title>
          <Paragraph
            style={{
              fontSize: VALUES.FONT_16.SIZE,
              lineHeight: VALUES.FONT_16.LINE_HEIGHT,
              color: `${COLORS.MMD_PRIMARY_9}`,
              maxWidth: '40rem',
              opacity: `${VALUES.TEXT_OPACITY}`
            }}
          >
            MatchMeMD provides a unique approach on educational content for the USMLE. Designed especially for medical
            students and residents preparing for STEP 2 CK, CS and STEP 3 CCS.
          </Paragraph>

          <CTAButtons>
            <MDButton
              type="primary"
              size="large"
              style={{
                backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
                borderColor: `${COLORS.MMD_SECONDARY_4}`,
                fontSize: '1rem',
                width: '48%',
                minWidth: '9rem',
                maxWidth: '15rem'
              }}
            >
              Start a free trial
            </MDButton>
            <MDButton
              ghost
              type="primary"
              size="large"
              style={{
                color: `${COLORS.MMD_PRIMARY_8}`,
                borderColor: `${COLORS.MMD_PRIMARY_8}`,
                fontSize: '1rem',
                width: '48%',
                minWidth: '9rem',
                maxWidth: '15rem'
              }}
            >
              See pricing
            </MDButton>
          </CTAButtons>
        </div>

        <Img
          src={data.landingImage.publicURL}
          alt="doctor looks at patient electronic chart tablet"
          style={{ marginBottom: '1rem' }}
        />
      </Section>
    </div>
  );
};

export default CTASection;
