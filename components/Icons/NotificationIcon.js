import React from 'react'
import styled from 'styled-components';
import { Notifications } from "@styled-icons/ionicons-outline/Notifications"
function NotificationIcon({ color, width }) {
  const NotificationsIc = styled(Notifications)`
  `;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>
      <NotificationsIc color={color} width="100%" />
    </div>
  )
}

export { NotificationIcon } 