import React from 'react';
import { StyledTag } from './styles';

const Tag = ({ tag }) => {
  const { value } = tag;
  return (
    <StyledTag>
      <span>{value}</span>
    </StyledTag>
  );
};

export default Tag;
