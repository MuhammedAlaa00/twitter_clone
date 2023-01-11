import React from 'react';
import Styles from '../../styles/Signup.module.scss';
import BackgroundContainer from './SignUpBackgroundContainer';
import SignUpFormContainer from './SignUpFormContainer';
import UseListviewModal from './SignUpFormContent/core/useListviewModal';
import RequestProvider from './SignUpFormContent/core/RequestProvider';
function Signup() {
  return (
    <RequestProvider>
      <UseListviewModal>
        <main className={Styles.container}>
          <BackgroundContainer />
          <SignUpFormContainer />
        </main>
      </UseListviewModal>
    </RequestProvider>
  );
}

export default Signup;
