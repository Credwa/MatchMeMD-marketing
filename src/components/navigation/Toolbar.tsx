import Logo from '@/components/Logo';
import MDButton from '@/components/ui/MDButton';
import NavigationItem from '@/components/navigation/NavigationItem';
import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

interface Props {
  drawerToggleClicked: Function;
}

const Nav = styled.nav`
  min-height: ${VALUES.TOOLBAR_HEIGHT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${VALUES.PAGE_PADDING};
  max-width: ${VALUES.PAGE_MAX_WIDTH}px;
  margin-left: auto;
  margin-right: auto;
`;

const Toolbar: React.FC<Props> = ({ drawerToggleClicked }) => {
  const isReallySmallScreen = useMediaQuery({ maxWidth: 325 });

  const getStartedButton = isReallySmallScreen ? null : (
    <NavigationItem link="/subscribe">
      <MDButton
        type="primary"
        ghost
        size="middle"
        style={{ color: `${COLORS.MMD_PRIMARY_8}`, borderColor: `${COLORS.MMD_PRIMARY_8}` }}
      >
        Get started
      </MDButton>
    </NavigationItem>
  );

  return (
    <div style={{ width: '100vw', margin: 'auto', backgroundColor: `${COLORS.MMD_BACKGROUND}` }}>
      <Nav>
        <NavigationItem link="/">
          <Logo width={120} />
        </NavigationItem>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {getStartedButton}
          <NavigationItem style={{ marginLeft: '1rem' }} toggleDrawer={drawerToggleClicked}>
            <MenuOutlined
              style={{
                fontSize: VALUES.TOOLBAR_ICON_SIZE,
                color: COLORS.MMD_PRIMARY_8
              }}
            />
          </NavigationItem>
        </div>
      </Nav>
    </div>
  );
};

export default Toolbar;
