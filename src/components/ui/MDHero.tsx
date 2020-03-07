import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';

interface Props {
  children: React.ReactNode;
}

const Section = styled.section``;

const MMDHero = styled.div`
  position: absolute;
  background-color: ${COLORS.MMD_HERO_BACKGROUND};
  height: 100vh;
  max-height: 60rem;
  margin: ${VALUES.PAGE_IGNORE_PADDING};
  margin-top: -0rem;
  padding: ${VALUES.PAGE_PADDING};
  width: 100vw;
  transform: skewY(-15deg);
  z-index: ${VALUES.HERO_INDEX};
`;

const ChildrenSection = styled.div`
  padding-top: 8rem;
  padding-bottom: 12rem;
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
      <MMDHero />
      <ChildrenSection>{children}</ChildrenSection>
    </Section>
  );
};

export default MDHero;
