/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Head from "next/head";
import Signup from "../../components/Sign-Up/Signup";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Loader from "../../components/SpinnerLoader";
function index() {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);
  if (status === "unauthenticated") {
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
