import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import { StyledToastContainer } from './common/styled-components';
import ProtectedRoute from './components/ProtectedRoute';
// import Profile from './pages/profile/Profile';
// import CreateGlucoseReading from './pages/glucoseReading/components/create/CreateGlucoseReading';
// import Footer from './components/footer/Footer';
import { useWindowSize } from './hooks/useWindowResize';
// import GlucoseReadingLists from './pages/glucoseReading/components/list/GlucoseReadingLists';
// import SignOut from './pages/signOut/SignOut';
import { ROUTES, themes } from './constants';
import { getSvgWidth, isStandAloneAndRunningOnIos16 } from './utils';
import { appThemes } from './common/theme';
// import ReadingDetails from './pages/readingDetails';
import PageNotFoundAnimated from './components/PageNotFoundAnimated';
import FallBackScreen from './components/fallbackScreen';
import { useAuth, useTheme } from './common/slices';

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 100vh; 
  margin:0;
`;

const AppContainer = styled.div`
  overflow-y: scroll;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  -ms-overflow-style: none;  //For hiding scroll bars in IE and Edge
  scrollbar-width: none; //For hiding scroll bars in Firefox

  //For hiding scrollbar in Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

const { SIGN_UP, SIGN_IN, SIGN_OUT, DASHBOARD, PROFILE, CREATE_READING, LIST_READINGS, READING_DETAILS } = ROUTES;

const App = () => {
  const [screenWidth] = useWindowSize();
  const isTabScreen = screenWidth <= 1023;
  const [userInfo] = useAuth();
  const [theme] = useTheme();
  // const hasUserInfo = userInfo && Object.keys(userInfo).length > 0;
  
  return (
    <ThemeProvider theme={appThemes[theme]}>
      <AppWrapper>
        {!isTabScreen && <Header />}
        <StyledToastContainer />
        <AppContainer style={{ height: isStandAloneAndRunningOnIos16() ? 'calc(100vh - 8.175rem)' : 'calc(100vh - 6.55rem)' }}>
          <Routes>

            <Route path={SIGN_UP} element={<Home />}>
              <Route element={<SignUp />} index />
              <Route element={<SignIn />} path={SIGN_IN} />
            </Route>

            {/* Protected routes */}
            <Route path='' element={<ProtectedRoute />}>
              <Route element={<Dashboard />} path={DASHBOARD} />
              {/* <Route element={<Profile />} path={PROFILE} />
              <Route element={<CreateGlucoseReading />} path={CREATE_READING} />
              <Route element={<GlucoseReadingLists />} path={LIST_READINGS} />
              <Route element={<ReadingDetails />} path={READING_DETAILS} /> */}

              {/* This route is only for mobile screen */}
              {/* {isTabScreen && <Route element={<SignOut />} path={SIGN_OUT} />} */}
            </Route>

            <Route path='*' element={(
              <FallBackScreen
                title={"Sorry, page not found!"}
                showCta={true}
                ctaLink={ROUTES.DASHBOARD}
                ctaText={"Go to HomePage"}
                svgComponent={<PageNotFoundAnimated width={getSvgWidth(screenWidth)} />}
              />
            )} />

          </Routes>
        </AppContainer>
        {/* {isTabScreen && hasUserInfo && < Footer />} */}
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App