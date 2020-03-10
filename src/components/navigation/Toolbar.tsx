import Logo from '@/components/Logo';
import MDButton from '@/components/ui/MDButton';
import NavigationItem from '@/components/navigation/NavigationItem';
import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

interface Props {}

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

const Toolbar: React.FC<Props> = () => {
  const isReallySmallScreen = useMediaQuery({ maxWidth: 325 });

  const getStartedButton = isReallySmallScreen ? null : (
    <NavigationItem link="/">
      <MDButton
        type="primary"
        ghost
        size="middle"
        style={{ color: `${COLORS.MMD_PRIMARY_8}`, borderColor: `${COLORS.MMD_PRIMARY_8}`, padding: '0 0.9735rem' }}
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
          <NavigationItem link="/" style={{ marginLeft: '1rem' }}>
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
