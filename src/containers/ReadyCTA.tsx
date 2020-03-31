import Fade from 'react-reveal/Fade';
import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { navigate } from 'gatsby';

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

  .button-dynamic {
    font-size: 1rem;
    width: 35vw;
    margin-top: 1rem;
    max-width: 15rem;
    min-width: 9rem;
    @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
      width: 30vw;
      max-width: 20rem;
    }

    @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) and (max-width: ${VALUES.PAGE_MAX_WIDTH}px) {
      width: 20vw;
    }

    @media (max-width: ${VALUES.SMALL_PHONE_BREAKPOINT}px) {
      margin-top: 1rem;
      width: 100vw;
      margin-left: 1.5rem;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 2rem 0 0;
  flex-wrap: wrap;

  @media (max-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    flex-direction: row;
  }
`;

const ReadyCTA: React.FC<Props> = () => {
  return (
    <Section>
      <div
        style={{
          maxWidth: `${VALUES.PAGE_MAX_WIDTH}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
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
                backgroundColor: `${COLORS.MMD_PRIMARY_6}`,
                borderColor: `${COLORS.MMD_PRIMARY_5}`,
                marginRight: '1rem'
              }}
              className="button-dynamic"
              onClick={event => navigate('/subscribe/')}
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
                borderColor: `${COLORS.MMD_PRIMARY_8}`
              }}
              className="button-dynamic"
              onClick={event => navigate('/subscribe/')}
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
