import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import { StyledToastContainer } from './common/styled-components';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import CreateGlucoseReading from './pages/glucoseReading/components/CreateGlucoseReading';

const AppWrapper = styled.div`
  height: 100vh;
`;

const AppContainer = styled.div`
  height: calc(100vh - 6rem);
  overflow-y: scroll;
  padding: 2rem;

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
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
    </AppWrapper>
  )
}

export default App