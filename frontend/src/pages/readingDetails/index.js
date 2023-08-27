import React, { useEffect } from 'react'
import { useGetReadingQuery } from '../../slices/readingApiSlice';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router-dom';

const ReadingDetails = () => {
  const { date } = useParams();
  const { data: reading, isLoading } = useGetReadingQuery({ date });

  if (isLoading) {
    return <LoadingSpinner />
  };

  console.log("READING = ", reading)

  return (
    <div>Reading Details Page</div>
  )
}

export default ReadingDetails