import Head from 'next/head';
import { signOut } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { isObjectEmpty } from "../helpers/helperfn"
import Loader from '../components/SpinnerLoader';
export default function Home() {
  const state = useSelector(state => state);
  const handleSignOut = () => {
    localStorage.clear();
    signOut({ callbackUrl: '/signup' })
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="" />
      </Head>
      <div>
        {/* {status == "loading" ? <Loader /> : <>{session?.user.name}</>} */}
        {isObjectEmpty(state.user) ? <Loader />  : <>{state.user.userName}</>}
        <br/>
        <button onClick={handleSignOut}>sign Out</button>
      </div>
    </div>
  );
}