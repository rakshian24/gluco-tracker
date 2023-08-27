import React from 'react';
import { ListContainer, ListContentContainer, StyledLegend } from '../readingListItem/styles';
import { TYPES_MAP } from '../../constants';
import { ConsumedFoodsContainer, Reading } from './styles';
import Tag from '../tag/Tag';
import { isArrayEmpty } from '../../utils';

const ReadingDetailsCard = ({ readingObj }) => {
  const {
    type,
    reading,
    consumedFoods
  } = readingObj;
  return (
    <ListContainer>
      <StyledLegend>{TYPES_MAP[type]}</StyledLegend>
      <ListContentContainer>
        <Reading>{reading} mg/dL</Reading>
        <ConsumedFoodsContainer>
          {!isArrayEmpty(consumedFoods) && consumedFoods.map((food) => {
            return (
              <Tag tag={food} key={food._id} />
            )
          })}
        </ConsumedFoodsContainer>
      </ListContentContainer>
    </ListContainer>
  )
}

export default ReadingDetailsCard