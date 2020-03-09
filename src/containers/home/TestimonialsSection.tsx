import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
  } from 'pure-react-carousel';
import { COLORS, VALUES } from '@/themes/variables';
import { useMediaQuery } from 'react-responsive';
import 'pure-react-carousel/dist/react-carousel.es.css';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  height: 30vh;
  margin: ${VALUES.PAGE_IGNORE_PADDING};
  padding: 2rem 1.875rem;
  background: ${COLORS.MMD_HERO_BACKGROUND};
  @media (min-width: 768px) {
    margin-top: 5rem;
  }

  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const TestimonialsSection: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: VALUES.PAGE_MAX_WIDTH });
  let containerStyle = {};
  if (isLargeScreen) {
    containerStyle = {
      width: '100vw',
      margin: 'auto'
    };
  }
  return (
    <div style={{ marginTop: '5rem', ...containerStyle }}>
      <Section>
        <Title level={3} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
          Customer Stories
        </Title>
        <Paragraph style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}`, opacity: `${VALUES.TEXT_OPACITY}` }}>
          Read stories from some of our customers
        </Paragraph>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
          visibleSlides={3}
          isPlaying={true}
          infinite={true}
        >
          <Slider>
            <Slide index={0}>I am the first Slide.</Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide>
            <Slide index={3}>I am the 4th Slide.</Slide>
            <Slide index={4}>I am the 5th Slide.</Slide>
          </Slider>
        </CarouselProvider>
      </Section>
    </div>
  );
};

export default TestimonialsSection;
