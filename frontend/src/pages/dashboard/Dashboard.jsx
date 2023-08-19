import React from 'react';
import { useSelector } from 'react-redux';
import { DashboardContainer } from './styles';
import { PageTitle } from '../../common/styled-components';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <DashboardContainer>
      <PageTitle>
        Welcome, {userInfo?.name}!
      </PageTitle>
    </DashboardContainer>
  )
}

export default Dashboard