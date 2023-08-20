import React from 'react';
import { BsX } from 'react-icons/bs';
import { StyledTag } from './styles';

const Tag = ({ tag, handleRemoveTag }) => {
  const { uuid, text } = tag;
  return (
    <StyledTag>
      <span>{text}</span>
      <BsX
        className="close-icon"
        onClick={(e) => handleRemoveTag(e, uuid)}
        size={20}
      ></BsX>
    </StyledTag>
  );
};

export default Tag;
