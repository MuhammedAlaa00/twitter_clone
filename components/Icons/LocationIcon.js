import React from 'react'
import { Location } from "@styled-icons/evil/Location"
import styled from 'styled-components';
function LocationIcon({color}) {
  const LocationIc = styled(Location)``;
  return (
    <div className='w-6'>
      <LocationIc color={color} width="100%" />
    </div>
  )
}

export { LocationIcon }
