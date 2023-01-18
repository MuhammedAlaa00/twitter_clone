import { useEffect } from "react"
import { FirebaseContext, Firebase } from '../Firebase';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { wrapper } from '../Redux/store'
import { useDispatch } from 'react-redux'
import { useFirebase } from '../Firebase';
import { FetchUsers } from "../Redux/user/actions"
import '../styles/globals.css';
import '../styles/MainStyles.scss';
function MyApp({ Component, session, token, ...pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const dispatch = useDispatch()
  const { getUser } = useFirebase()
  useEffect(() => {
    let currentuser;
    if (typeof window !== 'undefined') {
      currentuser = window.localStorage.getItem('currentuser')
      if (currentuser) {
        const doc = getUser(currentuser)
        FetchUsers(dispatch, doc)
      }
    }
  }, [])
  return (
    <SessionProvider session={session}>
      <StyledEngineProvider injectFirst>
        <FirebaseContext.Provider value={new Firebase()}>
          <Provider store={store}>
            <Component {...props.pageProps} />
          </Provider>
        </FirebaseContext.Provider>
      </StyledEngineProvider>
    </SessionProvider>
  );
}
export default wrapper.withRedux(MyApp);

