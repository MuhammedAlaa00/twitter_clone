import React from "react";
import styles from "../../styles/Signup.module.scss";
import { TwitterIcon } from "../Icons";
import { SpaceColor } from "../../styles/Signup.module.scss";
import HeadingContent from "./SignUpFormContent/HeadingContent";
import SignInAuthBtnsContent from "./SignUpFormContent/SignInAuthBtnsContent";
function SignUpFormContainer() {
  return (
    <section className={`${styles.column} ${styles.signInContainer}`}>
      <TwitterIcon color={SpaceColor} width={"45px"} />
      <HeadingContent />
      <SignInAuthBtnsContent />
      <div></div>
      <div></div>
      <div></div>
    </section>
  );
}

export default SignUpFormContainer;
