import React from 'react'
import Button from '@mui/material/Button';
import Link from "next/link"
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react';
function SideMenuMainMenuItem({ title, icon, href }) {
  const router = useRouter()
  const handleActive = (e) => {
  }
  return (
    <Link href={href}>
      <Button onClick={(e) => handleActive(e)} variant="text" className={`flex justify-start lg:text-sm sm:px-0 text-whiteColor min-w-[200px] max-w-[240px] md:text-center lg:text-left md:px-4 lg:py-2 md:p-[0.4rem] rounded-full my-1 ${href == router.pathname ? "active" : ""}`}>
        <div className='flex items-center'>
          <div className='flex items-center pr-6'>{icon}</div>
          <div className={`sm:hidden md:hidden lg:block text-lg capitalize ${href == router.asPath ? "font-bold" : "font-normal"}`}>{title}</div>
        </div>
      </Button>
    </Link>
  )
}
export default SideMenuMainMenuItem
