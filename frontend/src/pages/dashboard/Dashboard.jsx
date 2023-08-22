import React from 'react';
import { useSelector } from 'react-redux';
import { DashboardContainer } from './styles';
import { PageTitle } from '../../common/styled-components';
import { useGetReadingsQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import ReadingList from '../../components/readingList/ReadingList';
import { isArrayEmpty } from '../../utils';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { data: readings, isLoading } = useGetReadingsQuery();

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <DashboardContainer>
      <PageTitle>
        Welcome, {userInfo?.name}!
      </PageTitle>
      {!isArrayEmpty(readings) && <ReadingList readings={readings} />}
    </DashboardContainer>
  )
}

export default Dashboard