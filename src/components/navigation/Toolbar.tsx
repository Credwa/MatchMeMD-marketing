import Logo from '@/components/Logo';
import MDButton from '@/components/ui/MDButton';
import MenuData, { MenuDataItemInterface } from '@/components/navigation/ToolbarItems';
import NavigationItem from '@/components/navigation/NavigationItem';
import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';
import { MenuOutlined } from '@ant-design/icons';

interface Props {
  drawerToggleClicked: any;
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
  .isMobile {
    @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
      display: none !important;
    }
  }
  .isTabletOrDesktop {
    @media (max-width: ${VALUES.TABLET_MIN_WIDTH}px) {
      display: none !important;
    }
  }
  .isReallySmall {
    @media (max-width: 325px) {
      display: none !important;
    }
  }

  .dynamic-padding {
    padding: 0 0.7rem;
    @media (min-width: ${VALUES.DESKTOP_MIN_WIDTH}px) {
      padding: 0 2.3rem;
    }
  }
`;

const SubMenu = styled.ul`
  height: ${VALUES.TOOLBAR_HEIGHT};
  margin-bottom: 0 !important;
  cursor: pointer;
  color: #00a8ba;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover .dropdown-content {
    display: block;
  }
`;

const SubMenuContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const SubMenuItems = styled.div`
  position: absolute;
  display: none;
  background-color: ${COLORS.MMD_BACKGROUND};
  border-radius: 10px;
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  top: 2.7rem;
  right: -3.2rem;
  width: 14rem;
  &:after {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: ${COLORS.MMD_BACKGROUND};
    border-radius: 4px;
    z-index: -1;
    left: 6rem;
    top: -0.5rem;
    margin-left: auto;
    margin-right: auto;
    transform: rotate(45deg);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Toolbar: React.FC<Props> = ({ drawerToggleClicked }) => {
  const MenuItems = Object.values(MenuData).map((data: MenuDataItemInterface, index: number) => {
    if (data.children) {
      return (
        <SubMenuContainer key={index}>
          <SubMenu className="dynamic-padding">
            <span style={{ paddingRight: '.3rem', marginTop: '.1rem', color: `${COLORS.MMD_PRIMARY_7}` }}>
              {data.icon.render()}
            </span>
            {data.key}

            <SubMenuItems className="dropdown-content">
              {Object.values(data.children).map((childrenData: MenuDataItemInterface, childIndex: number) => {
                return (
                  <NavigationItem
                    key={`${data.key}${childIndex}`}
                    link={`${childrenData.link}`}
                    style={{ paddingLeft: '.7rem', padding: '0 4rem' }}
                  >
                    <span style={{ paddingRight: '.3rem', marginTop: '.1rem', color: `${COLORS.MMD_PRIMARY_7}` }}>
                      {childrenData.icon.render()}
                    </span>
                    {childrenData.key}
                  </NavigationItem>
                );
              })}
            </SubMenuItems>
          </SubMenu>
        </SubMenuContainer>
      );
    } else if (data.key === 'Sign up' || data.key === 'Log in') {
      return [];
    } else {
      return (
        <NavigationItem key={index} link={`${data.link}`} className="dynamic-padding">
          <span style={{ paddingRight: '.3rem', marginTop: '.1rem', color: `${COLORS.MMD_PRIMARY_7}` }}>
            {data.icon.render()}
          </span>
          <span>{data.key}</span>
        </NavigationItem>
      );
    }
  });

  const getStartedButton = (
    <NavigationItem link="/subscribe/" className="isReallySmall">
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

  const ToolbarItems = (
    <>
      <div style={{ display: 'flex', width: '100%' }} className="isTabletOrDesktop">
        {MenuItems}
        <div style={{ display: 'flex', marginLeft: 'auto', justifyContent: 'space-between', width: '11rem' }}>
          <NavigationItem link="/subscribe/">
            <span style={{ paddingRight: '.4rem', marginTop: '.1rem', color: `${COLORS.MMD_PRIMARY_7}` }}>
              {MenuData.login.icon.render()}
            </span>
            <span>{MenuData.login.key}</span>
          </NavigationItem>
          <NavigationItem link="/subscribe/">
            <MDButton
              type="primary"
              ghost
              size="middle"
              style={{ color: `${COLORS.MMD_PRIMARY_8}`, borderColor: `${COLORS.MMD_PRIMARY_8}` }}
            >
              Get started
            </MDButton>
          </NavigationItem>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="isMobile">
        {getStartedButton}
        <MDButton
          type="link"
          icon={<MenuOutlined style={{ fontSize: '24px' }} />}
          style={{
            marginLeft: '1rem',
            height: `${VALUES.TOOLBAR_HEIGHT}`,
            color: `${COLORS.MMD_PRIMARY_8}`,
            display: 'flex',
            alignItems: 'center'
          }}
          onClick={drawerToggleClicked}
        ></MDButton>
      </div>
    </>
  );

  return (
    <header style={{ width: '100vw', margin: 'auto', backgroundColor: `${COLORS.MMD_BACKGROUND}` }}>
      <Nav>
        <NavigationItem link="/">
          <Logo width={120} />
        </NavigationItem>

        {ToolbarItems}
      </Nav>
    </header>
  );
};

export default Toolbar;
