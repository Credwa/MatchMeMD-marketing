import MDButton from '@/components/ui/MDButton';
import MDHero from '@/components/ui/MDHero';
import React from 'react';
import ReactPlayer from 'react-player';
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
      <MDHero skewed height={60}>
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
          Get on demand access to our library of content with fun courses and labs. Learn at home on your devices, or
          download content on our mobile version for on the go offline learning.
        </Paragraph>
        <MDButton
          type="primary"
          size="large"
          style={{
            backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
            borderColor: `${COLORS.MMD_SECONDARY_4}`,
            fontSize: '1rem',
            width: '48%',
            minWidth: '9rem',
            maxWidth: '15rem',
            margin: '2rem 0 3rem 0'
          }}
        >
          Learn more
        </MDButton>
        <ReactPlayer url="https://streamable.com/moo" controls height={250} width={300} />
      </MDHero>
    </div>
  );
};

export default VideoSection;
