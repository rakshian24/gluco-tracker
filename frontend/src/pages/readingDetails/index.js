import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../../components/LoadingSpinner';
import { PageTitle } from '../../common/styled-components';
import { getFormattedDate, getSvgWidth, isArrayEmpty } from '../../utils';
import ReadingDetailsCard from '../../components/readingDetailsCard';
import FallBackScreen from '../../components/fallbackScreen';
import { ROUTES } from '../../constants';
import NoDataFoundSvgComponent from '../../components/NoDataFoundSvgComponent';
import { useWindowSize } from '../../hooks/useWindowResize';
import { ReadingDetailsContainer, ReadingDetailsContentContainer } from './styles';
import { useFetchReadingDetails } from '../../common/slices';

const ReadingDetails = () => {
  const { date } = useParams();
  const [screenWidth] = useWindowSize();
  const [readings, { fetchReadingsDetailsInit, isLoading }] = useFetchReadingDetails();

  useEffect(() => {
    fetchReadingsDetailsInit(date)
  }, [])

  if (isLoading) {
    return <LoadingSpinner />
  };

  return (
    <ReadingDetailsContainer>
      <PageTitle>Readings for {getFormattedDate(date)}</PageTitle>
      <ReadingDetailsContentContainer>
        {!isArrayEmpty(readings) ? readings.map(reading => {
          return <ReadingDetailsCard key={reading._id} readingObj={reading} />
        }) : <FallBackScreen
          title={"No data found for this date."}
          subtitle={"Please add some readings."}
          showCta={true}
          ctaLink={ROUTES.CREATE_READING}
          ctaText={"Add Reading"}
          svgComponent={<NoDataFoundSvgComponent width={getSvgWidth(screenWidth)} />}
        />}
      </ReadingDetailsContentContainer>
    </ReadingDetailsContainer>
  )
}

export default ReadingDetails