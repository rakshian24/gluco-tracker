import React from 'react'
import ReadingListItem from '../readingListItem/ReadingListItem'

const ReadingList = ({ readings }) => {
  return (readings.map(reading => {
    return <ReadingListItem key={reading._id} reading={reading} />
  }))
}

export default ReadingList