import MDHero from '@/components/ui/MDHero';
import React from 'react';
import Testimonial from '@/components/ui/Testimonial';
import Typography from 'antd/es/typography';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import { COLORS, VALUES } from '@/themes/variables';
import { useMediaQuery } from 'react-responsive';
import 'pure-react-carousel/dist/react-carousel.es.css';

const { Title, Paragraph } = Typography;

const TestimonialsSection: React.FC = () => {
  const isLargeScreen = useMediaQuery({ minWidth: VALUES.PAGE_MAX_WIDTH });
  let containerStyle = {};
  let visibleSlides = 2;
  if (isLargeScreen) {
    visibleSlides = 3;
    containerStyle = {
      width: '100vw',
      margin: 'auto'
    };
  }

  let slides = [];

  for (let index = 0; index < 8; index++) {
    slides.push(
      <Slide index={index}>
        <Testimonial name="May E." testimonial="MatchMeMD helped me get matched to my dream resisdency job" />
      </Slide>
    );
  }

  return (
    <div style={{ marginTop: '5rem', ...containerStyle }}>
      <MDHero height={80} top={20}>
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
          naturalSlideHeight={125}
          totalSlides={slides.length}
          visibleSlides={visibleSlides}
          isPlaying={true}
          infinite={true}
        >
          <Slider>{slides}</Slider>
        </CarouselProvider>
      </MDHero>
    </div>
  );
};

export default TestimonialsSection;
