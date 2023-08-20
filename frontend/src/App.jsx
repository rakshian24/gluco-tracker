import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import { StyledToastContainer } from './common/styled-components';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import CreateGlucoseReading from './pages/glucoseReading/components/create/CreateGlucoseReading';
import Footer from './components/footer/Footer';
import { useWindowSize } from './hooks/useWindowResize';
import GlucoseReadingLists from './pages/glucoseReading/components/list/GlucoseReadingLists';
import SignOut from './pages/signOut/SignOut';
import { ROUTES } from './constants';
import { isStandAloneAndRunningOnIos16 } from './utils';
import { greenTheme } from './common/theme';

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 100vh; 
  margin:0;
`;

const AppContainer = styled.div`
  overflow-y: scroll;
  padding: 2rem;

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

const { SIGN_UP, SIGN_IN, SIGN_OUT, DASHBOARD, PROFILE, CREATE_READING, LIST_READINGS } = ROUTES;

const App = () => {
  const [screenWidth] = useWindowSize();
  const isMobileScreen = screenWidth <= 500;
  const { userInfo } = useSelector((state) => state.auth);
  const hasUserInfo = userInfo && Object.keys(userInfo).length > 0;
  return (
    <ThemeProvider theme={greenTheme}>
      <AppWrapper>
        {!isMobileScreen && <Header />}
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
              <Route element={<Profile />} path={PROFILE} />
              <Route element={<CreateGlucoseReading />} path={CREATE_READING} />
              <Route element={<GlucoseReadingLists />} path={LIST_READINGS} />

              {/* This route is only for mobile screen */}
              {isMobileScreen && <Route element={<SignOut />} path={SIGN_OUT} />}
            </Route>

            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </AppContainer>
        {isMobileScreen && hasUserInfo && < Footer />}
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App