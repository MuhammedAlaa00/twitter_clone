import React from 'react'
import styled from 'styled-components';
import { Bookmarks } from "@styled-icons/bootstrap/Bookmarks"
function BookmarksIcon({ color, width }) {
  const BookmarksIc = styled(Bookmarks)``;
  return (
    <div className='sm:w-6 md:w-5 lg:w-7'>
      <BookmarksIc color={color} width="100%" />
    </div>
  )
}

export  {BookmarksIcon}