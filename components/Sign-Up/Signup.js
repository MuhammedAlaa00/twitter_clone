import React from "react";
import Styles from "../../styles/Signup.module.scss";
import BackgroundContainer from "./SignUpBackgroundContainer";
import SignUpFormContainer from "./SignUpFormContainer";
function Signup() {
  return (
    <main className={Styles.container}>
      <BackgroundContainer />
      <SignUpFormContainer/>
    </main>
  );
}

export default Signup;
