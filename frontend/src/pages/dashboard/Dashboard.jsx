import React, { useEffect } from 'react';
import { DashboardContainer, DashboardContentContainer } from './styles';
import { PageTitle } from '../../common/styled-components';
import LoadingSpinner from '../../components/LoadingSpinner';
import ReadingList from '../../components/readingList/ReadingList';
import { getSvgWidth, isArrayEmpty } from '../../utils';
import NoDataFoundSvgComponent from '../../components/NoDataFoundSvgComponent';
import { useWindowSize } from '../../hooks/useWindowResize';
import FallBackScreen from '../../components/fallbackScreen';
import { ROUTES } from '../../constants';
import { useAuth, useFetchReadings } from '../../common/slices';

const Dashboard = () => {
  const [screenWidth] = useWindowSize();
  const [userInfo] = useAuth();

  const [readings, { fetchReadingsInit, isLoading }] = useFetchReadings();

  useEffect(() => {
    fetchReadingsInit();
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <DashboardContainer>
      <PageTitle>
        Welcome, {userInfo?.name}!
      </PageTitle>
      {!isArrayEmpty(readings) ? (<DashboardContentContainer>
        <ReadingList readings={readings} />
      </DashboardContentContainer>) : (
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