import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';
import { Link } from 'gatsby';

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
  flex-wrap: nowrap;

  &:hover {
    color: ${COLORS.MMD_PRIMARY_9};
  }
`;

const NavigationItem: React.FC<Props> = ({ link, children, style, toggleDrawer }) => {
  return (
    <NavBarItem to={link} style={style} onClick={toggleDrawer}>
      {children}
    </NavBarItem>
  );
};

export default NavigationItem;
