import React from 'react'
import Button from '@mui/material/Button';
import Link from "next/link"
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react';
function SideMenuMainMenuItem({ title, icon, href }) {
  const { data: session } = useSession()
  const router = useRouter()
  // const handleProfile = () => {
  //   if (title == "Profile") {
  //     router.push({
  //       query: { userId: session.user.id }
  //     })
  //   }
  // }
  return (
    <div>
      <Button variant="text" className="flex justify-start lg:text-sm sm:px-0 text-whiteColor min-w-[200px] md:text-center lg:text-left md:px-4 lg:py-2 md:p-[0.4rem] rounded-full my-1">
        <Link href={href}>
          <div className='flex items-center'>
            <div className='flex items-center pr-6'>{icon}</div>
            <div className='sm:hidden md:hidden lg:block text-lg font-bold capitalize'>{title}</div>
          </div>
        </Link>
      </Button>
    </div>


  )
}

export default SideMenuMainMenuItem