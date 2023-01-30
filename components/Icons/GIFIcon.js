import React from 'react'
import { FileGif } from "@styled-icons/remix-fill/FileGif"
import styled from 'styled-components';
function GIFIcon({color}) {
    const FileGifIc = styled(FileGif)``;
    return (
        <div className='w-5'>
            <FileGifIc color={color} width="100%" />
        </div>
    )
}

export {GIFIcon}
