import React from 'react';
import styled from 'styled-components';

import MDButton from '@/components/ui/MDButton';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '@/components/Logo';
import NavigationItem from '@/components/navigation/NavigationItem';
import { VALUES, COLORS } from '@/themes/variables';

interface Props {}

const Header = styled.header`
  min-height: ${VALUES.TOOLBAR_HEIGHT};
  background-color: ${COLORS.MMD_BACKGROUND};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${VALUES.PAGE_PADDING};
`;

const Toolbar: React.FC<Props> = () => {
  return (
    <Header>
      <NavigationItem link="/">
        <Logo width={120} />
      </NavigationItem>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <NavigationItem link="/">
          <MDButton type="primary" ghost size="middle">
            Get started
          </MDButton>
        </NavigationItem>
        <NavigationItem link="/" style={{ marginLeft: '1rem' }}>
          <MenuOutlined
            style={{
              fontSize: VALUES.TOOLBAR_ICON_SIZE,
              color: COLORS.MMD_PRIMARY_8
            }}
          />
        </NavigationItem>
      </div>
    </Header>
  );
};

export default Toolbar;
