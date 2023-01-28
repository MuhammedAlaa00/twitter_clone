import React from 'react'
import {
    TwitterIcon
} from "../../Icons"
import { WhiteColor } from "../../../styles/Colors.module.scss"
import Button from '@mui/material/Button';
import Link from "next/link"
function LogoConatiner() {
    return (
        <Link href="/">
            <Button variant='text' className='px-4 py-4 rounded-full'>
                <TwitterIcon color={WhiteColor} width={"30px"} />
            </Button>
        </Link>
    )
}
export default LogoConatiner