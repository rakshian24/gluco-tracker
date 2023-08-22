import React from 'react';
import { getFormattedDate, getReadingsObjectByType } from '../../utils';
import { HeaderCell, ListContainer, ListContentContainer, ListItemCol, ListItemRow, StyledLegend, ValueCell } from './styles';

const ReadingListItem = ({ reading }) => {
  const date = getFormattedDate(reading._id);
  const dayReadingsArr = reading.results;
  const readingsObjByType = getReadingsObjectByType(dayReadingsArr);

  const getReadingVal = (readingType) => {
    return readingsObjByType?.[readingType]?.reading || '-'
  }

  return (
    <ListContainer>
      <StyledLegend>{date}</StyledLegend>
      <ListContentContainer>

        {/* Breakfast */}
        <ListItemRow>
          <ListItemCol>
            <HeaderCell>BB: </HeaderCell>
            <ValueCell>{getReadingVal('BB')}</ValueCell>
          </ListItemCol>

          <ListItemCol>
            <HeaderCell>AB: </HeaderCell>
            <ValueCell>{getReadingVal('AB')}</ValueCell>
          </ListItemCol>
        </ListItemRow>

        {/* Lunch */}
        <ListItemRow>
          <ListItemCol>
            <HeaderCell>BL: </HeaderCell>
            <ValueCell>{getReadingVal('BL')}</ValueCell>
          </ListItemCol>
          <ListItemCol>
            <HeaderCell>AL: </HeaderCell>
            <ValueCell>{getReadingVal('AL')}</ValueCell>
          </ListItemCol>
        </ListItemRow>

        {/* Dinner */}
        <ListItemRow>
          <ListItemCol>
            <HeaderCell>BD: </HeaderCell>
            <ValueCell>{getReadingVal('BD')}</ValueCell>
          </ListItemCol>
          <ListItemCol>
            <HeaderCell>AD: </HeaderCell>
            <ValueCell>{getReadingVal('AD')}</ValueCell>
          </ListItemCol>
        </ListItemRow>

      </ListContentContainer>
    </ListContainer>
  )
}

export default ReadingListItem