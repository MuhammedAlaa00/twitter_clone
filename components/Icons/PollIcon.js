import React from 'react'
import { Poll } from "@styled-icons/boxicons-regular/Poll"
import styled from 'styled-components';
function PollIcon({color}) {
    const PollIc = styled(Poll)``;
    return (
        <div className='w-5'>
            <PollIc color={color} width="100%" />
        </div>
    )
}

export {PollIcon}
