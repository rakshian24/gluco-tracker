import React from 'react';
import { useSelector } from 'react-redux';
import { DashboardContainer, DashboardTitle } from './styles';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <DashboardContainer>
      <DashboardTitle>
        Welcome, {userInfo?.name}!
      </DashboardTitle>
    </DashboardContainer>
  )
}

export default Dashboard