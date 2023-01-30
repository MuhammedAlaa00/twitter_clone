import React from 'react'
import { Schedule } from "@styled-icons/material-sharp/Schedule"
import styled from 'styled-components';
function ScheduleIcon({color}) {
    const ScheduleIc = styled(Schedule)``;
    return (
        <div className='w-5'>
            <ScheduleIc color={color} width="100%" />
        </div>
    )
}

export { ScheduleIcon }
