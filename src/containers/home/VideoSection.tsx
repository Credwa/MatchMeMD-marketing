import MDButton from '@/components/ui/MDButton';
import MDHero from '@/components/ui/MDHero';
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { navigate } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  display: grid;
  position: relative;
  z-index: 5;

  @media (min-width: 768px) {
    .CTA {
      grid-area: CTA;
    }
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 30% auto;
    grid-template-areas:
      'img CTA'
      'img CTA'
      'img .';

    .CTA {
      margin-left: 4rem;
    }
  }
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const VideoSection: React.FC = () => {
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
      <MDHero skewed height={60}>
        <Section>
          <div className="CTA">
            <Title level={3} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
              Engaging video content for learning
            </Title>

            <Paragraph
              style={{
                color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
                fontSize: VALUES.FONT_16.SIZE,
                lineHeight: VALUES.FONT_16.LINE_HEIGHT,
                maxWidth: '40rem',
                opacity: `${VALUES.TEXT_OPACITY}`
              }}
            >
              Get on demand access to our library of content with fun courses and labs. Learn at home on your devices,
              or download content on our mobile version for on the go offline learning.
            </Paragraph>

            <MDButton
              type="primary"
              size="large"
              style={{
                backgroundColor: `${COLORS.MMD_PRIMARY_6}`,
                borderColor: `${COLORS.MMD_PRIMARY_6}`,
                fontSize: '1rem',
                width: '48%',
                minWidth: '9rem',
                maxWidth: '15rem',
                margin: '2rem 0 3rem 0'
              }}
              onClick={event => navigate('/subscribe')}
            >
              Learn more
            </MDButton>
          </div>

          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
              url="https://streamable.com/moo"
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls
              width="100%"
              height="100%"
            />
          </div>
        </Section>
      </MDHero>
    </div>
  );
};

export default VideoSection;
