import React from 'react'
import Button from '@mui/material/Button';
import {

  FeatherIcon
} from "../../Icons"
import { WhiteColor } from "../../../styles/Colors.module.scss"
function TweetActionContainer() {
  return (
    <React.Fragment>
          <Button variant='text' className="md:rounded-[50%] min-w-[60%] py-3 px-3 md:flex items-center justify-center lg:hidden bg-primaryColor ">
              <FeatherIcon color={WhiteColor} />
          </Button>
          <Button variant='text' className='md:hidden lg:block bg-primaryColor text-whiteColor font-bold w-[220px] px-4 py-4 rounded-full'>
              Tweet
          </Button>
    </React.Fragment>
  )
}

export default TweetActionContainer