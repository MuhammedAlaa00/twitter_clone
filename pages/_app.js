import { FirebaseContext, Firebase } from '../Firebase';
import { SessionProvider } from 'next-auth/react';
import { StyledEngineProvider } from '@mui/material/styles';
import '../styles/globals.css';
import '../styles/MainStyles.scss';
function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <StyledEngineProvider injectFirst>
        <FirebaseContext.Provider value={new Firebase()}>
          <Component {...pageProps} />
        </FirebaseContext.Provider>
      </StyledEngineProvider>
    </SessionProvider>
  );
}
export default MyApp;
