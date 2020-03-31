import Backdrop from '@/components/ui/Backdrop';
import bg from '../../assets/images/bg.svg';
import Logo from '@/components/Logo';
import Menu from 'antd/es/menu';
import MenuData, { MenuDataItemInterface } from '@/components/navigation/ToolbarItems';
import NavigationItem from '@/components/navigation/NavigationItem';
import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { COLORS, VALUES } from '@/themes/variables';
import { navigate } from 'gatsby';

interface Props {
  show: boolean;
  closed: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const SubMenu = styled(Menu.SubMenu)`
  color: ${COLORS.MMD_BACKGROUND} !important;

  i {
    &::before {
      background: ${COLORS.MMD_BACKGROUND} !important;
    }
    &::after {
      background: ${COLORS.MMD_BACKGROUND} !important;
    }
  }
  ul {
    background-color: rgba(0, 0, 0, 0) !important;
  }
  li {
    padding-left: 2rem !important;
    font-size: 16px !important;
    opacity: 1 !important;
    color: ${COLORS.MMD_BACKGROUND} !important;
  }
`;

const StyledMenu = styled(Menu)`
  padding-left: 3rem !important;
  align-self: flex-end;
  max-height: 60vh;
  overflow: scroll;
  width: 15rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${COLORS.MMD_BACKGROUND};
  border: none;
  opacity: 1;

  span,
  li {
    font-size: 16px !important;
    opacity: 1 !important;
    color: ${COLORS.MMD_BACKGROUND} !important;
  }
`;

const SideDrawerContainer = styled.div`
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    display: none;
  }
  height: 90vh;
  width: 100vw;
  top: 10%;
  position: fixed;
  display: flex;
  flex-direction: column;
  animation-name: fadeInFirst;
  animation-duration: 0.7s;
  align-items: flex-end;
  justify-content: flex-start;
  top: 0;
  clip-path: ellipse(100% 75% at 85% 25%);
  background-color: ${COLORS.MMD_PRIMARY_2};
  z-index: 1022;

  &:before {
    width: 100vw;
    height: 83vh;
    display: block;
    animation-name: fadeInBefore;
    animation-duration: 0.7s;
    clip-path: ellipse(100% 60% at 80% 35%);
    position: absolute;
    content: '';
    background-image: url(${bg}) !important;
  }

  @keyframes fadeInFirst {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: ${COLORS.MMD_PRIMARY_2};
    }
  }

  @keyframes fadeInBefore {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-image: url(${bg}) !important;
    }
  }
`;

const ChildrenSection = styled.div`
  position: relative;
  top: 1vh;
  width: 100vw;
  padding: ${VALUES.PAGE_PADDING};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideDrawer: React.FC<Props> = ({ show, closed }) => {
  const MenuItems = Object.values(MenuData).map((data: MenuDataItemInterface, index: number) => {
    if (data.children) {
      return (
        <SubMenu
          key={index}
          title={
            <span>
              {data.icon.render()}
              <span>{data.key}</span>
            </span>
          }
        >
          {Object.values(data.children).map((childrenData: MenuDataItemInterface, childIndex: number) => {
            return (
              <Menu.Item key={`${data.key}${childIndex}`} onClick={event => navigate(`${childrenData.link}`)}>
                {childrenData.icon.render()}
                {childrenData.key}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={index} onClick={event => navigate(`${data.link}`)}>
          {data.icon.render()}
          {data.key}
        </Menu.Item>
      );
    }
  });
  return show ? (
    <>
      <Backdrop show={show} onBackdropClicked={closed} />
      <SideDrawerContainer>
        <ChildrenSection>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <NavigationItem
              link="/"
              style={{
                alignSelf: 'flex-start'
              }}
            >
              <Logo width={120} />
            </NavigationItem>
            <CloseOutlined
              onClick={closed}
              style={{
                alignSelf: 'flex-end',
                display: 'flex',
                alignItems: 'center',
                height: `${VALUES.TOOLBAR_HEIGHT}`,
                fontSize: '30px',
                color: COLORS.MMD_BACKGROUND,
                cursor: 'pointer'
              }}
            />
          </div>

          <StyledMenu theme="dark" mode="inline">
            {MenuItems}
          </StyledMenu>
        </ChildrenSection>
      </SideDrawerContainer>
    </>
  ) : null;
};

export default SideDrawer;
