/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { VALUES } from '@/themes/variables';
import Toolbar from '@/components/navigation/Toolbar';

const GlobalStyle = createGlobalStyle`
  body,html,* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  margin-top: 2rem;
  padding: ${VALUES.PAGE_PADDING};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Toolbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
