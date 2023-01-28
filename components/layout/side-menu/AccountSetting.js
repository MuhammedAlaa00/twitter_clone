import React from 'react'
import Button from '@mui/material/Button';
import Link from "next/link"
import Image from "next/image"
import { useSession } from 'next-auth/react';
import { WhiteColor } from "../../../styles/Colors.module.scss"
import {
    ThreeMoreIcon
} from "../../Icons"
function AccountSetting() {
    const { data: session } = useSession()
    const myLoader = () => {
        return session?.user?.image
    }
    {/**xl:left-2/4 */ }
    return (
        <div className="absolute bottom-0 md:left-8 lg:left-0 mb-2 md:pl-2">
            <Button variant='text' className="flex justify-between items-center rounded-full px-4 py-3">
                <div className='flex items-center'>
                    <Image
                        className='rounded-full'
                        loader={myLoader}
                        src={`${session?.user?.image}`}
                        alt="Picture of the author"
                        width={40}
                        height={40}
                    />
                </div>
                <div className='lg:block md:hidden sm:hidden flex items-center text-whiteColor px-2 capitalize font-semibold'>
                    <p>{session?.user?.name}</p>
                </div>
                <div className='lg:block md:hidden sm:hidden font-extrabold flex items-center'>
                    <ThreeMoreIcon color={WhiteColor} width={"20px"} weight={"900"} />
                </div>
            </Button>
        </div>
    )
}
export default AccountSetting