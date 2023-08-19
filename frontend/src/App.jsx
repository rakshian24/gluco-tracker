import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
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

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 100vh; 
  margin:0;
`;

const AppContainer = styled.div`
  height: calc(100vh - 6.5rem);
  overflow-y: scroll;
  padding: 2rem;

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  const [screenWidth] = useWindowSize();
  const isMobileScreen = screenWidth <= 500;
  const { userInfo } = useSelector((state) => state.auth);
  const hasUserInfo = userInfo && Object.keys(userInfo).length > 0;
  return (
    <AppWrapper>
      {!isMobileScreen && <Header />}
      <StyledToastContainer />
      <AppContainer>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route element={<SignUp />} index />
            <Route element={<SignIn />} path='sign-in' />
          </Route>

          {/* Protected routes */}
          <Route path='' element={<ProtectedRoute />}>
            <Route element={<Dashboard />} path='dashboard' />
            <Route element={<Profile />} path='profile' />
            <Route element={<CreateGlucoseReading />} path='/reading/create' />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AppContainer>
      {isMobileScreen && hasUserInfo && < Footer />}
    </AppWrapper>
  )
}

export default App