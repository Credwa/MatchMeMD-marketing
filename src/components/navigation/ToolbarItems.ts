import {
  AppstoreOutlined,
  BulbOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  MailOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  ToolOutlined,
  UserOutlined
  } from '@ant-design/icons';

export interface MenuDataItemInterface {
  key: string;
  children?: object;
  link: string | undefined;
  icon: any;
}

export interface MenuDataInterface {
  products: MenuDataItemInterface;
  pricing: MenuDataItemInterface;
  aboutUs: MenuDataItemInterface;
  contact: MenuDataItemInterface;
  login: MenuDataItemInterface;
  signUp: MenuDataItemInterface;
}

const menuData: MenuDataInterface = {
  products: {
    key: 'Products',
    children: {
      courses: {
        key: 'Courses',
        link: '/subscribe/',
        icon: PlayCircleOutlined
      },
      challenges: {
        key: 'Challenges',
        link: '/subscribe/',
        icon: BulbOutlined
      },
      discussionForum: {
        key: 'Forum',
        link: '/subscribe/',
        icon: MessageOutlined
      },
      mobileApp: {
        key: 'Mobile app',
        link: '/subscribe/',
        icon: AppstoreOutlined
      }
    },
    link: undefined,
    icon: ToolOutlined
  },
  pricing: {
    key: 'Pricing',
    link: '/subscribe/',
    icon: DollarOutlined
  },
  aboutUs: {
    key: 'About us',
    link: '/subscribe/',
    icon: InfoCircleOutlined
  },
  contact: {
    key: 'Contact',
    link: '/subscribe/',
    icon: MailOutlined
  },
  login: {
    key: 'Log in',
    link: '/subscribe/',
    icon: LoginOutlined
  },
  signUp: {
    key: 'Sign up',
    link: '/subscribe/',
    icon: UserOutlined
  }
};

export default menuData;
