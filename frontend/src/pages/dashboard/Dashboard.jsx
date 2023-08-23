import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DashboardContainer } from './styles';
import { PageTitle } from '../../common/styled-components';
import { useLazyGetReadingsQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import ReadingList from '../../components/readingList/ReadingList';
import { isArrayEmpty } from '../../utils';

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [trigger, { data: readings, isLoading }] = useLazyGetReadingsQuery();

  //usLazyQuery with trigger will call the api irrespective of cache.
  useEffect(() => {
    trigger();
  }, [trigger])

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