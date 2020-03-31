import Footer from '@/components/navigation/Footer';
import React, { useState } from 'react';
import SideDrawer from '@/components/navigation/SideDrawer';
import styled from 'styled-components';
import Toolbar from '@/components/navigation/Toolbar';
import { COLORS, VALUES } from '@/themes/variables';
import { createGlobalStyle } from 'styled-components';
import './layout.css';

const GlobalStyle = createGlobalStyle`
  body,html,* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${COLORS.MMD_BACKGROUND} !important;
    overflow-x: hidden;
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
  const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
  const sideDrawerClosedHandler = () => {
    setSideDrawerVisible(false);
  };
  const sideDrawerToggleHandler = () => {
    setSideDrawerVisible(!sideDrawerVisible);
  };

  return (
    <>
      <GlobalStyle />
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer show={sideDrawerVisible} closed={sideDrawerClosedHandler} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
