import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';

interface HeroProps {
  skewed?: boolean;
  children: React.ReactNode;
  height: number;
  top?: number;
}

const MMDHero = styled.section<HeroProps>`
  position: relative;
  background-color: ${COLORS.MMD_BACKGROUND};
  height: ${props => (props.height ? `${props.height}rem` : null)};
  max-height: 55rem;
  margin: ${VALUES.PAGE_IGNORE_PADDING};
  margin-top: ${props => (props.skewed ? '-8rem' : null)};
  padding: 3rem 0;
  width: 100vw;
  overflow: hidden;
  z-index: -100;
  &:after {
    width: 100vw;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: ${props => (props.top ? `${props.top}%` : '10%')};
    transform: ${props => (props.skewed ? 'skewY(-4deg)' : null)};
    background-color: ${COLORS.MMD_HERO_BACKGROUND};
    z-index: ${VALUES.LAST_INDEX};
  }
`;

const ChildrenSection = styled.div`
  padding-top: 10rem;
  z-index: 10;
  margin: ${VALUES.PAGE_PADDING};
  @media (min-width: 768px) {
    padding-top: 15rem;
    padding-left: ${VALUES.PAGE_PADDING_SINGLE};
    padding-right: ${VALUES.PAGE_PADDING_SINGLE};
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MDHero: React.FC<HeroProps> = ({ height, top, skewed, children }) => {
  return (
    <MMDHero skewed={skewed} height={height} top={top}>
      <ChildrenSection>{children}</ChildrenSection>
    </MMDHero>
  );
};

export default MDHero;
