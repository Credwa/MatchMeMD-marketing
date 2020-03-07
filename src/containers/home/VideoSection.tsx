import MDButton from '@/components/ui/MDButton';
import MDHero from '@/components/ui/MDHero';
import React from 'react';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

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
      <MDHero>
        <Title level={3} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
          Engaging video content for learning
        </Title>
        <Paragraph
          style={{
            color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT,
            maxWidth: '40rem'
          }}
        >
          Get on demand access to our library of content with fun courses and labs. Learn at home on your devices, or
          download content on our mobile version for on the go offline learning.
        </Paragraph>
        <MDButton
          type="primary"
          size="large"
          style={{
            backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
            borderColor: `${COLORS.MMD_SECONDARY_4}`,
            fontSize: '.875rem',
            width: '48%',
            minWidth: '9rem',
            maxWidth: '15rem',
            margin: '2rem 0 3rem 0'
          }}
        >
          Learn more
        </MDButton>
        <iframe
          width="300"
          height="250"
          src="https://www.youtube.com/embed/t87VGQ-NlwQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          style={{ borderRadius: '6px' }}
          title="Random vid"
        ></iframe>
      </MDHero>
    </div>
  );
};

export default VideoSection;
