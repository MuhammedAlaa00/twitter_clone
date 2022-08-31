import { useCallback } from "react";
import "../styles/globals.css";
import { FirebaseContext, Firebase } from "../Firebase";
import { SessionProvider } from "next-auth/react";
import "../styles/MainStyles.scss";
function MyApp({ Component, pageProps, session }) {

  return (
    <SessionProvider session={session}>
      <FirebaseContext.Provider value={new Firebase()}>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </SessionProvider>
  );
}

export default MyApp;
