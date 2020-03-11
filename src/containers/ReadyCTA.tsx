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
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  align-content: center;
  margin: 2rem 0 0;
  flex-wrap: wrap;
  max-width: 31.5rem;
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
          width: '100%'
        }}
      >
        <Title level={3}>Ready to learn?</Title>

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

        <CTAButtons>
          <MDButton
            type="primary"
            size="large"
            style={{
              backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
              borderColor: `${COLORS.MMD_SECONDARY_4}`,
              fontSize: '1rem',
              minWidth: '9rem',
              width: '48%',
              maxWidth: '15rem'
            }}
            onClick={event => navigate('/subscribe')}
          >
            Start now
          </MDButton>
          <MDButton
            ghost
            type="primary"
            size="large"
            style={{
              color: `${COLORS.MMD_PRIMARY_8}`,
              borderColor: `${COLORS.MMD_PRIMARY_8}`,
              fontSize: '1rem',
              minWidth: '9rem',
              width: '48%',
              maxWidth: '15rem'
            }}
            onClick={event => navigate('/subscribe')}
          >
            Contact us
          </MDButton>
        </CTAButtons>
      </div>
    </Section>
  );
};

export default ReadyCTA;
