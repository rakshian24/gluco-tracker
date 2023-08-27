import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DashboardContainer } from './styles';
import { PageTitle } from '../../common/styled-components';
import { useLazyGetReadingsQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import ReadingList from '../../components/readingList/ReadingList';
import { getSvgWidth, isArrayEmpty } from '../../utils';
import NoDataFoundSvgComponent from '../../components/NoDataFoundSvgComponent';
import { useWindowSize } from '../../hooks/useWindowResize';
import FallBackScreen from '../../components/fallbackScreen';
import { ROUTES } from '../../constants';

const Dashboard = () => {
  const [screenWidth] = useWindowSize();
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
      {!isArrayEmpty(readings) ? <ReadingList readings={readings} /> : (
        <FallBackScreen
          title={"No data found."}
          subtitle={"Please add some readings."}
          showCta={true}
          ctaLink={ROUTES.CREATE_READING}
          ctaText={"Add Reading"}
          svgComponent={<NoDataFoundSvgComponent width={getSvgWidth(screenWidth)} />}
        />
      )}
    </DashboardContainer>
  )
}

export default Dashboard