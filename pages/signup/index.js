import React from 'react';
import Head from 'next/head';
import Signup from '../../components/Sign-Up/Signup';
function index() {
  return (
    <>
      <Head>
        <link rel="icon" href="" />
        <title>Sign Up</title>
      </Head>
      <Signup />
    </>
  )
}
export default index;
export async function getServerSideProps (context) {
  const {res} = context
  console.log(res)
  return {
    props:{}
  }
}