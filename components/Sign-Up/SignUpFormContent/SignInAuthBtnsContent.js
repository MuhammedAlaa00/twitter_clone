import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import styles from "../../../styles/Signup.module.scss";
import ButtonC from "../../AuthButtons";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
function SignInAuthBtnsContent() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState({
    googleLoading: false,
    appleLoading: false,
  });
  const handleAuthSignIn = (e, provider) => {
    e.preventDefault();
    if (status === "authenticated") {
      toast("you are signed In successfully !");
    } else {
      switch (provider) {
        case "google":
          setLoading({
            ...loading,
            googleLoading: true,
          });
          signIn("google");
          if (session) {
            setLoading({
              ...loading,
              googleLoading: false,
            });
            router.push("/");
          }
          break;
        case "apple":
          setLoading({
            ...loading,
            appleLoading: true,
          });
          signIn("apple");
          if (session) {
            setLoading({
              ...loading,
              appleLoading: false,
            });
            router.push("/");
          }
          break;
      }
    }
  };
  return (
    <div className={styles.btnsContainer}>
      <ButtonC
        handleAuth={(e) => handleAuthSignIn(e, "google")}
        loading={loading.googleLoading}
        provider="google"
      />
      <ButtonC
        handleAuth={(e) => handleAuthSignIn(e, "apple")}
        loading={loading.appleLoading}
        provider="apple"
      />
      <ToastContainer />
    </div>
  );
}

export default SignInAuthBtnsContent;
