import React from 'react'
import styled from 'styled-components';
import { MoreCircle } from "@styled-icons/fluentui-system-regular/MoreCircle"
function MoreIcon({ color, width }) {
  const MoreCircleIc = styled(MoreCircle)``;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>
      <MoreCircleIc color={color} width="100%" />
    </div>
  )
}

export { MoreIcon }