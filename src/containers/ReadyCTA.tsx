import Fade from 'react-reveal/Fade';
import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { navigate } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;
interface Props {}

const Section = styled.section`
  padding: ${VALUES.PAGE_PADDING};
  padding-bottom: 3rem;
  margin-left: ${VALUES.PAGE_PADDING_SINGLE_NEGATIVE};
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: none;
  width: 100vw;
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  align-content: center;
  margin: 2rem 0 0;
  flex-wrap: wrap;
  @media (max-width: ${VALUES.SMALL_IPHONE_BREAKPOINT}px) {
    flex-direction: column;
  }
`;

const ReadyCTA: React.FC<Props> = () => {
  const isExtraSmallScreen = useMediaQuery({ maxWidth: VALUES.SMALL_IPHONE_BREAKPOINT });

  let buttonStyle: any = {
    fontSize: '1rem',
    width: '40vw',
    maxWidth: '15rem',
    minWidth: '9rem'
  };

  if (isExtraSmallScreen) {
    buttonStyle = { ...buttonStyle, marginTop: '1rem', width: '80vw' };
  }
  return (
    <Section>
      <div
        style={{
          maxWidth: `${VALUES.PAGE_MAX_WIDTH}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Fade right>
          <Title level={3}>Ready to learn?</Title>
        </Fade>

        <Fade left>
          <Paragraph
            style={{
              textAlign: 'center',
              color: `${COLORS.MMD_PRIMARY_10}`,
              fontSize: VALUES.FONT_16.SIZE,
              lineHeight: VALUES.FONT_16.LINE_HEIGHT,
              opacity: VALUES.TEXT_OPACITY
            }}
          >
            Join other medical students at MatchMeMD
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
              Start now
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
              Contact us
            </MDButton>
          </Fade>
        </CTAButtons>
      </div>
    </Section>
  );
};

export default ReadyCTA;
