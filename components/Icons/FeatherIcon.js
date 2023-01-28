import React from 'react'
import { Feather } from "@styled-icons/entypo/Feather"
import styled from 'styled-components';
function FeatherIcon({ color, width }) {
    const FeatherIc = styled(Feather)``;
    return (
        <div className='w-5'>
            <FeatherIc color={color} width="100%" />
        </div>
    )
}

export { FeatherIcon }