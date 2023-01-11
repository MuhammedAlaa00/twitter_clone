import React from 'react';
import styles from '../../styles/Signup.module.scss';
import Link from 'next/link';
import { GoogleIcon, AppleIcon } from '../Icons';
import Loader from '../SpinnerLoader';
import Button from '@mui/material/Button';
function ButtonC({ handleAuth, handleopenSignUpModal, provider, loading }) {
  const CheckAction = (e) => {
    provider === 'signUp' ? handleopenSignUpModal() : handleAuth(e);
  };
  return (
    <Link href="" passHref>
      <Button
        variant="outlined"
        className={`${styles.SignIn} ${provider === 'signUp' && styles.SignUp}`}
        onClick={(e) => CheckAction(e)}>
        {loading && <Loader size={18} />}
        {provider === 'google' && (
          <>
            <span>Sign In with google</span>
            <GoogleIcon width={'20px'} />
          </>
        )}
        {provider === 'apple' && (
          <>
            <AppleIcon width={'20px'} />
            <span>Sign In with apple</span>
          </>
        )}
        {provider === 'signUp' && (
          <>
            <span>Sign Up</span>
          </>
        )}
      </Button>
    </Link>
  );
}

export default ButtonC;
