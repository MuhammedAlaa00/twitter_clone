import React from 'react'
import styled from 'styled-components';
import { MoreHorizontalOutline } from "@styled-icons/evaicons-outline/MoreHorizontalOutline"
function ThreeMoreIcon({ color, width, weight }) {
    const MoreIc = styled(MoreHorizontalOutline)
    `
        font-weight:${weight}
    `;
  return (
      <MoreIc color={color} width={width} />
  )
}

export { ThreeMoreIcon }