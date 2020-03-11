import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { Link } from 'gatsby';

const { Paragraph } = Typography;

interface Props {
  children: React.ReactNode;
  link: string;
  style?: object;
}

const NavItem = styled(Link)`
  height: ${VALUES.TOOLBAR_HEIGHT};
  display: flex;
  align-items: center;
`;

const FooterNavItem: React.FC<Props> = ({ link, children, style }) => {
  return (
    <NavItem to={link} style={style}>
      {children}
    </NavItem>
  );
};

export default FooterNavItem;
