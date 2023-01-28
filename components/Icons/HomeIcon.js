import React from 'react'
import styled from 'styled-components';
import { HomeCircle } from "@styled-icons/boxicons-solid/HomeCircle"
function HomeIcon({ color, width }) {
    const HomeIc = styled(HomeCircle)`
      
    `;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>
      <HomeIc color={color} width="100%" />
    </div>
  )
}

export { HomeIcon}