import React from 'react'
import styled from 'styled-components';
// import {CardImage} from "@styled-icons/bootstrap/CardImage"
import { Image } from "@styled-icons/bootstrap/Image"
function UploadIcon({color}) {
    const CardImageIc = styled(Image)``;
    return (
        <div className='w-5'>
            <CardImageIc color={color} width="100%" />
        </div>
    )
}

export {UploadIcon}
