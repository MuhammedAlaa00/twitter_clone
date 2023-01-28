import React from 'react';
import styles from '../../styles/Signup.module.scss';
import { TwitterIcon } from '../Icons';
import { SpaceColor } from '../../styles/Signup.module.scss';
import HeadingContent from './SignUpFormContent/HeadingContent';
import SignInAuthBtnsContent from './SignUpFormContent/SignInAuthBtnsContent';
import SignupFormModal from './SignUpFormContent/SignUpFormUserModal/SignUpFormModal';
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
function SignUpFormContainer() {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  }
  return (
    <section className={`${styles.column} ${styles.signInContainer} dark:bg-dark bg-light`}>
      <div className='flex justify-between items-center'>
        <TwitterIcon color={SpaceColor} width={'45px'} />
        <div>
          <button
            className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
            onClick={handleTheme}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? (
              <MoonIcon className="text-blue-500 w-5 h-5" />
            ) : (
              <SunIcon className="text-blue-400 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <HeadingContent />
      <SignInAuthBtnsContent />
      <SignupFormModal />
    </section>
  );
}
export default SignUpFormContainer;
