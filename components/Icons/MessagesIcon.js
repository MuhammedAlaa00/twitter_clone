import React from 'react'
import styled from 'styled-components';
import { MessageSquare } from "@styled-icons/feather/MessageSquare"
function MessagesIcon({ color, width }) {
  const MessageSquareIc = styled(MessageSquare)``;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>
      <MessageSquareIc color={color} width="100%" />
      </div>
  )
}

export  {MessagesIcon}