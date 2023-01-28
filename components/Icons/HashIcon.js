import React from 'react'
import styled from 'styled-components';
import { Hash } from "@styled-icons/boxicons-regular/Hash"
function HashIcon({ color, width }) {
    const HashIc = styled(Hash)``;
    return (
        <div className='sm:w-6 md:w-6 lg:w-7'>
            <HashIc color={color} width="100%" />
        </div>
    )
}

export { HashIcon }