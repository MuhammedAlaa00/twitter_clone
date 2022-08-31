import React from "react";
import styles from "../../styles/Signup.module.scss";
import { WhiteColor } from "../../styles/Signup.module.scss";
import {TwitterIcon} from "../Icons"
function BackgroundContainer() {
  
  return (
    <section className={`${styles.column} ${styles.background}`}>
      <div className={styles.iconContainer}>
        <TwitterIcon color={WhiteColor} width={"500px"}/>
      </div>
    </section>
  );
}

export default BackgroundContainer;
