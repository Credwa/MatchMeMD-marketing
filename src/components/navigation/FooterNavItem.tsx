import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/themes/variables';
import { Link } from 'gatsby';

interface Props {
  children: React.ReactNode;
  link: string;
  className?: string | undefined;
  style?: object;
}

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  &:active {
    color: ${COLORS.MMD_PRIMARY_2} !important;
    opacity: 1 !important;
  }
  &:hover {
    color: ${COLORS.MMD_PRIMARY_2} !important;
    opacity: 1 !important;
  }
`;

const FooterNavItem: React.FC<Props> = ({ link, children, style, className }) => {
  return (
    <NavItem to={link} style={style} className={className}>
      {children}
    </NavItem>
  );
};

export default FooterNavItem;
