import React from 'react'
import { useGetReadingQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../../common/styled-components';
import { getFormattedDate, getSvgWidth, isArrayEmpty } from '../../utils';
import ReadingDetailsCard from '../../components/readingDetailsCard';
import FallBackScreen from '../../components/fallbackScreen';
import { ROUTES } from '../../constants';
import NoDataFoundSvgComponent from '../../components/NoDataFoundSvgComponent';
import { useWindowSize } from '../../hooks/useWindowResize';

const ReadingDetails = () => {
  const { date } = useParams();
  const [screenWidth] = useWindowSize();
  const { data: readings, isLoading } = useGetReadingQuery({ date });

  if (isLoading) {
    return <LoadingSpinner />
  };

  return (
    <>
      <PageTitle>Readings for {getFormattedDate(date)}</PageTitle>
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
    </>
  )
}

export default ReadingDetails