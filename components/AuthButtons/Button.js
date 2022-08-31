import React from "react";
import styles from "../../styles/Signup.module.scss";
import Link from "next/link";
import { GoogleIcon, AppleIcon } from "../Icons";
import Loader from "../SpinnerLoader";
import Button from "@mui/material/Button";
function ButtonC({ handleAuth, provider, loading }) {
  return (
    <Link href="/api/auth/signOut">
      <Button variant="outlined" className={styles.SignIn} onClick={handleAuth}>
        {loading && <Loader size={18} />}
        {provider === "google" && (
          <>
            <span>Sign In with google</span>
            <GoogleIcon width={"15px"} />
          </>
        )}
        {provider === "apple" && (
          <>
            <AppleIcon width={"15px"} />
            <span>Sign In with apple</span>
          </>
        )}
      </Button>
    </Link>
  );
}

export default ButtonC;
