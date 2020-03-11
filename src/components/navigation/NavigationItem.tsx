import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { VALUES } from '@/themes/variables';

interface Props {
  children: React.ReactNode;
  link: string;
  isLink?: boolean;
  style?: object;
  toggleDrawer?: any;
}

const NavBarItem = styled(Link)`
  height: ${VALUES.TOOLBAR_HEIGHT};
  display: flex;
  align-items: center;
`;

const NavigationItem: React.FC<Props> = ({ link, children, style, toggleDrawer }) => {
  return (
    <NavBarItem to={link} style={style} onClick={toggleDrawer}>
      {children}
    </NavBarItem>
  );
};

export default NavigationItem;
