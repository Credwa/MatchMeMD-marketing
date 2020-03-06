import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from 'antd/es/button';

const StyledMDButton = styled(Button)``;

const MDButton: React.FC<ButtonProps> = props => {
  return <StyledMDButton {...props}>{props.children}</StyledMDButton>;
};

export default MDButton;
