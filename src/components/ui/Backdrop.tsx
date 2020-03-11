import React from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLElement> {
  show?: boolean;
  onBackdropClicked: any;
}

const BackdropLayover = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1020;
  left: 0;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Backdrop: React.FC<Props> = ({ show, onBackdropClicked }) => {
  return show ? <BackdropLayover onClick={onBackdropClicked} /> : null;
};

export default Backdrop;
