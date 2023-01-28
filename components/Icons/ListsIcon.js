import React from 'react'
import styled from 'styled-components';
import { ClipboardBulletListLtr } from "@styled-icons/fluentui-system-regular/ClipboardBulletListLtr"
function ListsIcon({ color, width }) {
  const ClipboardBulletListLtrIc = styled(ClipboardBulletListLtr)``;
  return (
    <div className='sm:w-6 md:w-6 lg:w-7'>

      <ClipboardBulletListLtrIc color={color} width="100%" />
    </div>
  )
}

export  {ListsIcon}