import { useEffect, useState, useRef } from "react"
import { FirebaseContext, Firebase } from '../Firebase';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { wrapper } from '../Redux/store'
import { useDispatch } from 'react-redux'
import { useFirebase } from '../Firebase';
import { FetchUsers } from "../Redux/user/actions"
import { ThemeProvider } from "next-themes";
import { SideMenuContainer } from "../components/layout"
import '../styles/globals.css';
import '../styles/MainStyles.scss';
function MyApp({ Component, session, token, ...pageProps }) {
  let windowSize;
  if(typeof window !== "undefined") {
    windowSize = useRef([window?.innerWidth, window?.innerHeight]);
  }
  console.log(windowSize?.current[1])
  const { store, props } = wrapper.useWrappedStore(pageProps);
  const dispatch = useDispatch()
  const { getUser } = useFirebase()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let loggedIn;
    if (typeof window !== 'undefined') {
      loggedIn = window.localStorage.getItem('loggedIn')
      if (!loggedIn) {
        setIsLoggedIn(false)
      }
      else {
        setIsLoggedIn(true)
      }
    }
  }, [])
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
            <ThemeProvider disableTransitionOnChange enableSystem={true} attribute="class">
              {isLoggedIn ?
                <div className="sm:hidden md:block">
                  <div className="dark:bg-dark bg-light h-full min-h-screen w-full grid md:grid-cols-[20%_60%_20%] lg:grid-cols-[20%_50%_20%] divide-x divide-borderColor">
                    {/** side Menu section */}
                    {/* <div className={`relative ${665 < windowSize.current[1] ? 'h-3/5' : 'h-screen'}`}><SideMenuContainer /></div> */}
                    <div className={`relative`}><SideMenuContainer /></div>
                    {/** Home section */}
                    {/* <div>test</div> */}
                    <div className=""><Component {...pageProps} /></div>
                    {/** (search , news , to follow , messeages) section */}
                    <div className="">test</div>
                  </div> 
                </div>:
                <Component {...pageProps} />}
            </ThemeProvider>
          </Provider>
        </FirebaseContext.Provider>
      </StyledEngineProvider>
    </SessionProvider>
  );
}
export default wrapper.withRedux(MyApp);

