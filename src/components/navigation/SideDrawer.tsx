import Backdrop from '@/components/ui/Backdrop';
import React from 'react';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { COLORS, VALUES } from '@/themes/variables';

interface Props {
  show: boolean;
  closed: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
const SideDrawerContainer = styled.div`
  height: 80vh;
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
    height: 73vh;
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
  z-index: 1130;
  position: fixed;
  top: 1vh;
  margin: ${VALUES.PAGE_PADDING};
`;
const SideDrawer: React.FC<Props> = ({ show, closed }) => {
  return show ? (
    <>
      <Backdrop show={show} onBackdropClicked={closed} />
      <SideDrawerContainer>
        <ChildrenSection>
          <CloseOutlined
            onClick={closed}
            style={{
              fontSize: VALUES.TOOLBAR_ICON_SIZE,
              color: COLORS.MMD_BACKGROUND,
              cursor: 'pointer'
            }}
          />
        </ChildrenSection>
      </SideDrawerContainer>
    </>
  ) : null;
};

export default SideDrawer;
