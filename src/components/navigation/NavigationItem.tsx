import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { VALUES } from '@/themes/variables';

interface Props {
  children: React.ReactNode;
  link: string;
  style?: object;
}

const NavBarItem = styled(Link)`
  height: ${VALUES.TOOLBAR_HEIGHT};
  display: flex;
  align-items: center;
`;

const NavigationItem: React.FC<Props> = ({ link, children, style }) => {
  return (
    <NavBarItem to={link} style={style}>
      {children}
    </NavBarItem>
  );
};

export default NavigationItem;
