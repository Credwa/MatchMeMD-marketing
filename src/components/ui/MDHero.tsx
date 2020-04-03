import bg from '../../assets/images/bg.svg';
import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';
interface HeroProps {
  skewed?: boolean;
  children: React.ReactNode;
  height: number;
  top?: number;
  className?: string | undefined;
}

const MMDHero = styled.section<HeroProps>`
  position: relative;
  margin-top: ${props => (props.skewed ? '-8rem' : null)};
  background-image: url(${bg}) !important;
  width: 100vw;
`;

const MMDHeroContainer = styled.div`
  position: relative;
  z-index: 1;
  margin: ${VALUES.PAGE_IGNORE_PADDING};
`;

const ChildrenSection = styled.div`
  position: relative;
  z-index: 10;
  padding: 5rem 0;
  margin: ${VALUES.PAGE_PADDING};
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    padding-left: ${VALUES.PAGE_PADDING_SINGLE};
    padding-right: ${VALUES.PAGE_PADDING_SINGLE};
    padding-bottom: 10rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MDHero: React.FC<HeroProps> = ({ height, top, skewed, children, className }) => {
  return (
    <MMDHeroContainer className={className}>
      <MMDHero skewed={skewed} height={height} top={top}>
        {skewed ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F8FCFC"
              fill-opacity="1"
              d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        ) : null}
        <ChildrenSection>{children}</ChildrenSection>
      </MMDHero>
    </MMDHeroContainer>
  );
};

export default MDHero;
