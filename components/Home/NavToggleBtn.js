import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Link from "next/link";
import styles from "../../styles/Home.module.css"
function NavToggleBtn({ isForU, setIsForU, isFollowing, setIsFollowing }) {
    return (
        <div className='flex justify-between items-center'>
            <Button onClick={() => {
                setIsFollowing(false)
                setIsForU(true)
            }} className={`flex justify-center w-2/4 p-4 font-bold text-sm capitalize ${isForU ? `text-whiteColor ${styles.withLine}` : 'text-secondColor'}`}>
                for&nbsp;<span className='lowercase'>you</span>
            </Button>
            <Button onClick={() => {
                setIsForU(false)
                setIsFollowing(true)
            }} className={`flex justify-center w-2/4 p-4 font-bold text-sm capitalize ${isFollowing ? `text-whiteColor ${styles.withLine}` : 'text-secondColor'}`}>
                following
            </Button>
        </div>
    )
}
export default NavToggleBtn