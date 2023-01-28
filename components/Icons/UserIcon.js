import React from 'react'
import styled from 'styled-components';
import { User } from "@styled-icons/boxicons-regular/User"
function UserIcon({ color, width }) {
  const UserIc = styled(User)``;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>
      <UserIc color={color} width="100%" />
    </div>
  )
}

export { UserIcon}