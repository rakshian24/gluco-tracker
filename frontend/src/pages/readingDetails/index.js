import React from 'react'
import { useGetReadingQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router-dom';
import { PageTitle } from '../../common/styled-components';
import { getFormattedDate, isArrayEmpty } from '../../utils';
import ReadingDetailsCard from '../../components/readingDetailsCard';

const ReadingDetails = () => {
  const { date } = useParams();
  const { data: readings, isLoading } = useGetReadingQuery({ date });

  if (isLoading) {
    return <LoadingSpinner />
  };

  return (
    <>
      <PageTitle>Readings for {getFormattedDate(date)}</PageTitle>
      {!isArrayEmpty(readings) && readings.map(reading => {
        return <ReadingDetailsCard key={reading._id} readingObj={reading} />
      })}
    </>
  )
}

export default ReadingDetails