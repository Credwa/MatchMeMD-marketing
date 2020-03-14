import Backdrop from '@/components/ui/Backdrop';
import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import {
  CloseOutlined,
  MailOutlined,
  UserOutlined,
  LoginOutlined,
  InfoCircleOutlined,
  DollarOutlined,
  PlayCircleOutlined,
  BulbOutlined,
  MessageOutlined,
  AppstoreOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { COLORS, VALUES } from '@/themes/variables';
import Menu from 'antd/es/Menu';
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
    background-color: ${COLORS.MMD_HERO_BACKGROUND};
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
      background-color: ${COLORS.MMD_HERO_BACKGROUND};
    }
  }
`;

const ChildrenSection = styled.div`
  position: relative;
  top: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: ${VALUES.PAGE_PADDING};
`;

interface MenuDataItemInterface {
  key: string;
  children?: object;
  link: string | undefined;
  icon: any;
}

interface MenuDataInterface {
  products: MenuDataItemInterface;
  pricing: MenuDataItemInterface;
  aboutUs: MenuDataItemInterface;
  contact: MenuDataItemInterface;
  login: MenuDataItemInterface;
  signUp: MenuDataItemInterface;
}

const menuData: MenuDataInterface = {
  home: {
    key: 'Home',
    link: '/',
    icon: <HomeOutlined />
  },
  products: {
    key: 'Products',
    children: {
      courses: {
        key: 'Courses',
        link: '/subscribe',
        icon: <PlayCircleOutlined />
      },
      challenges: {
        key: 'Challenges',
        link: '/subscribe',
        icon: <BulbOutlined />
      },
      discussionForum: {
        key: 'Forum',
        link: '/subscribe',
        icon: <MessageOutlined />
      },
      mobileApp: {
        key: 'Mobile app',
        link: '/subscribe',
        icon: <AppstoreOutlined />
      }
    },
    link: undefined,
    icon: <MailOutlined />
  },
  pricing: {
    key: 'Pricing',
    link: '/subscribe',
    icon: <DollarOutlined />
  },
  aboutUs: {
    key: 'About us',
    link: '/subscribe',
    icon: <InfoCircleOutlined />
  },
  contact: {
    key: 'Contact',
    link: '/subscribe',
    icon: <MailOutlined />
  },
  login: {
    key: 'Login',
    link: '/subscribe',
    icon: <LoginOutlined />
  },
  signUp: {
    key: 'Sign up',
    link: '/subscribe',
    icon: <UserOutlined />
  }
};

const SideDrawer: React.FC<Props> = ({ show, closed }) => {
  const MenuItems = Object.values(menuData).map((data: MenuDataItemInterface, index: number) => {
    if (data.children) {
      return (
        <SubMenu
          key={index}
          title={
            <span>
              {data.icon}
              <span>{data.key}</span>
            </span>
          }
        >
          {Object.values(data.children).map((childrenData: MenuDataItemInterface, childIndex: number) => {
            return (
              <Menu.Item key={`${data.key}${childIndex}`} onClick={event => navigate(`${childrenData.link}`)}>
                {childrenData.icon}
                {childrenData.key}
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={index} onClick={event => navigate(`${data.link}`)}>
          {data.icon}
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
          <CloseOutlined
            onClick={closed}
            style={{
              alignSelf: 'flex-end',
              paddingRight: '.7rem',
              marginBottom: '1rem',
              fontSize: '30px',
              color: COLORS.MMD_BACKGROUND,
              cursor: 'pointer'
            }}
          />
          <StyledMenu theme="dark" mode="inline">
            {MenuItems}
          </StyledMenu>
        </ChildrenSection>
      </SideDrawerContainer>
    </>
  ) : null;
};

export default SideDrawer;
