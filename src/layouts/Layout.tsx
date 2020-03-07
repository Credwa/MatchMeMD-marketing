import React from 'react';
import styled from 'styled-components';
import Toolbar from '@/components/navigation/Toolbar';
import { COLORS, VALUES } from '@/themes/variables';
import { createGlobalStyle } from 'styled-components';
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

const GlobalStyle = createGlobalStyle`
  body,html,* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${COLORS.MMD_BACKGROUND};
    overflow-x: hidden;
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
  }
`;

const Main = styled.main`
  margin-top: 2rem;
  padding: ${VALUES.PAGE_PADDING};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <Toolbar />
    <Main>{children}</Main>
  </>
);

export default Layout;
