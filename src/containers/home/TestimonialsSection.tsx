import MDHero from '@/components/ui/MDHero';
import React from 'react';
import Testimonial from '@/components/ui/Testimonial';
import Typography from 'antd/es/typography';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { COLORS, VALUES } from '@/themes/variables';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;
const TestimonialsContainer = styled.div`
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    width: 100vw;
    margin: auto;
  }

  .isMobile {
    @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
      display: none !important;
    }
  }

  .isTabletOrDesktop {
    @media (max-width: ${VALUES.TABLET_MIN_WIDTH}px) {
      display: none !important;
    }
  }
`;

const TestimonialsSection: React.FC = () => {
  let slides = [];

  for (let index = 0; index < 8; index++) {
    slides.push(
      <Slide index={index} key={index}>
        <Testimonial name="May E." testimonial="MatchMeMD helped me get matched to my dream residency job" />
      </Slide>
    );
  }

  return (
    <TestimonialsContainer>
      <MDHero height={45} top={30} className="isTabletOrDesktop">
        <Title level={3} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
          Customer Stories
        </Title>
        <Paragraph
          style={{
            color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
            opacity: `${VALUES.TEXT_OPACITY}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT,
            marginBottom: '4rem'
          }}
        >
          Read stories from some of our customers
        </Paragraph>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={slides.length}
          visibleSlides={4}
          isPlaying={true}
          infinite={true}
          interval={5000}
          className="isTabletOrDesktop"
        >
          <Slider>{slides}</Slider>
        </CarouselProvider>
      </MDHero>

      <MDHero height={45} top={15} className="isMobile">
        <Title level={3} style={{ color: `${COLORS.MMD_NEUTRAL_LIGHT}` }}>
          Customer Stories
        </Title>
        <Paragraph
          style={{
            color: `${COLORS.MMD_NEUTRAL_LIGHT}`,
            opacity: `${VALUES.TEXT_OPACITY}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT,
            marginBottom: '4rem'
          }}
        >
          Read stories from some of our customers
        </Paragraph>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={190}
          totalSlides={slides.length}
          visibleSlides={2}
          isPlaying={true}
          infinite={true}
          interval={5000}
          className="isMobile"
        >
          <Slider>{slides}</Slider>
        </CarouselProvider>
      </MDHero>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
