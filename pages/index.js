import { useEffect, useState } from "react"
import Head from 'next/head';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loader from '../components/SpinnerLoader';
import Button from '@mui/material/Button';
import {HomeConatiner} from "../components/Home"
export default function Home() {
  const [isloggedIn, setIsloggedIn] = useState(true)
  const router = useRouter()
  useEffect(() => {
    let loggedIn;
    if (typeof window !== 'undefined') {
      loggedIn = window.localStorage.getItem('loggedIn')
      if (!loggedIn) {
        router.push("/signup")
      }
      else {
        setTimeout(() => setIsloggedIn(false), 1000);
      }
    }
  }, [])
  const handleSignOut = () => {
    localStorage.removeItem('loggedIn')
    signOut({ callbackUrl: '/signup' })
  }
  if (isloggedIn) return (
    <div className="flex justify-center items-center w-full h-screen dark:bg-dark bg-light">
      <Head>
        <title>Home</title>
        <link rel="icon" href="" />
      </Head>
      <Loader />
    </div>)
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="" />
      </Head>
      <div>
        <HomeConatiner/>       
         <Button onClick={handleSignOut}>
          Log out
        </Button>
      </div>
    </div>
  );
}
// export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
//   const session = await getSession(ctx);
//   const state = store.getState()
//   if (isObjectEmpty(state.user) || session == null) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/signup",
//       }, 
//     }
//   }
// })