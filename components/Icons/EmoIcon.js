import React from 'react'
import { EmojiSmile } from "@styled-icons/bootstrap/EmojiSmile"
import styled from 'styled-components';
function EmoIcon({ color }) {
    const EmojiSmileIc = styled(EmojiSmile)``;
    return (
        <div className='w-5'>
            <EmojiSmileIc color={color} width="100%" />
        </div>
    )
}

export { EmoIcon }
