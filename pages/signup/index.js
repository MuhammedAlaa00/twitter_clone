import React from 'react';
import Head from 'next/head';
import Signup from '../../components/Sign-Up/Signup';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Loader from '../../components/SpinnerLoader';
import { useFirebase } from '../../Firebase/FirebaseContext';
import { addDoc, Timestamp } from "firebase/firestore";
function index() {
  const { users } = useFirebase()
  const { status, data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
      addDoc(users(), {
        createdAt: Timestamp.now(),
        email: session?.user?.email,
        userName: session?.user?.name,
        image: session?.user?.image,
      })
    }
  }, [router, status]);
  if (status === 'unauthenticated') {
    return (
      <>
        <Head>
          <link rel="icon" href="" />
          <title>Sign Up</title>
        </Head>
        <Signup />
      </>
    );
  }
}
export default index;
