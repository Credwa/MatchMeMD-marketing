import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';

interface Props {
  children: React.ReactNode;
}

const Section = styled.section``;

const MMDHero = styled.div`
  position: relative;
  background-color: ${COLORS.MMD_BACKGROUND};
  height: 100vh;
  max-height: 60rem;
  margin: ${VALUES.PAGE_IGNORE_PADDING};
  margin-top: -8rem;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
  &:after {
    width: 100vw;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 10%;
    transform: skewY(-4deg);
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
  }
  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const MDHero: React.FC<Props> = ({ children }) => {
  return (
    <Section>
      <MMDHero>
        <ChildrenSection>{children}</ChildrenSection>
      </MMDHero>
    </Section>
  );
};

export default MDHero;
