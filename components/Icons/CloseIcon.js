import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import styled from 'styled-components';
import React from 'react';
function CloseIcon({ color, width }) {
  const CloseIc = styled(CloseOutline)``;
  return <CloseIc color={color} width={width} />;
}

export { CloseIcon };