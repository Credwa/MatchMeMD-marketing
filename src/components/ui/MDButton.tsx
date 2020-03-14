import Button, { ButtonProps } from 'antd/es/button';
import React from 'react';
import styled from 'styled-components';

const StyledMDButton = styled(Button)`
  white-space: nowrap;
  z-index: 1000;
`;

const MDButton: React.FC<ButtonProps> = props => <StyledMDButton {...props}>{props.children}</StyledMDButton>;

export default MDButton;
