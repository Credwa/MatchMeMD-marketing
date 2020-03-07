import React from 'react';
import styled from 'styled-components';
import { COLORS, VALUES } from '@/themes/variables';

interface EllipseProps {
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  right?: number;
  color: 'primary' | 'secondary';
}

const EllipseVis = styled.div<EllipseProps>`
  position: absolute;
  width: ${props => (props.width ? `${props.width}rem` : '3rem')};
  height: ${props => (props.height ? `${props.height}rem` : '3rem')};
  top: ${props => (props.top ? `${props.top}rem` : '0')};
  left: ${props => (props.left ? `${props.left}rem` : null)};
  right: ${props => (props.right ? `${props.right}rem` : null)};
  background-color: ${props => (props.color === 'primary' ? COLORS.MMD_PRIMARY_6 : COLORS.MMD_SECONDARY_6)};
  opacity: 0.05;
  border-radius: 100%;
  z-index: ${VALUES.LAST_INDEX};
`;

const Ellipse: React.FC<EllipseProps> = ({ width, height, top, left, right, color }) => (
  <EllipseVis width={width} height={height} top={top} left={left} color={color} right={right} />
);

export default Ellipse;
