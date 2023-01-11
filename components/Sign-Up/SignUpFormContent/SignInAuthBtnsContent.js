import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from '../../../styles/Signup.module.scss';
import ButtonC from '../../AuthButtons';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useListViewContext } from './core/useListviewModal';
import 'react-toastify/dist/ReactToastify.css';
function SignInAuthBtnsContent() {
  const { setOpenSignUpModal } = useListViewContext();
  const router = useRouter();
  const { data: session} = useSession();
  const [loading, setLoading] = useState({
    googleLoading: false,
    appleLoading: false,
    signUpLoading: false
  });
  const handleAuthCasses = (provider) => {
    setLoading({
      ...loading,
      googleLoading: true
    });
    signIn(provider);
    if (session) {
      setLoading({
        ...loading,
        googleLoading: false
      });
      router.push('/');
    }
  };
  const handleAuthSignIn = (e, provider) => {
    e.preventDefault();
    switch (provider) {
      case 'google':
        handleAuthCasses('google');
        break;
      case 'apple':
        handleAuthCasses('apple');
        break;
    }
  };
  const openSignUpModal = () => {
    setOpenSignUpModal(true);
  };
  return (
    <div className={styles.btnsContainer}>
      <ButtonC
        handleAuth={(e) => handleAuthSignIn(e, 'google')}
        loading={loading.googleLoading}
        provider="google"
      />
      {/* <ButtonC
        handleAuth={(e) => handleAuthSignIn(e, 'apple')}
        loading={loading.appleLoading}
        provider="apple"
      /> */}
      <ButtonC
        handleopenSignUpModal={openSignUpModal}
        loading={loading.signUpLoading}
        provider="signUp"
      />
      <ToastContainer />
    </div>
  );
}
export default SignInAuthBtnsContent;
