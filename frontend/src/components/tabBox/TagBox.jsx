import React, { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import Tag from '../tag/Tag';
import { TagContainer, TagInput, TagWrapper } from './styles';

const TagBox = ({ name, type, tags, setTags }) => {
  const tagInput = useRef();

  const createTagOnChangeEvent = (e) => {
    const text = e.target.value;
    let newTag;
    if (text[text.length - 1] === ',') {
      newTag = text.slice(0, text.length - 1);
      tagInput.current.value = '';
      setTags([...tags, { uuid: uuid(), text: newTag }]);
    }
  };


  const createTagOnEnter = (e) => {
    const text = e.target.value;
    if (e.key === 'Enter') {
      let newTag;
      newTag = text.slice(0, text.length);
      tagInput.current.value = '';
      setTags([...tags, { uuid: uuid(), text: newTag }]);
    }
  };

  const handleRemoveTag = (e, tagId) => {
    setTags(tags.filter((tag) => tag.uuid !== tagId));
  };

  return (
    <TagWrapper>
      <TagContainer>
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.uuid} handleRemoveTag={handleRemoveTag} />
        ))}
      </TagContainer>
      <TagInput
        name={name}
        ref={tagInput}
        type={type}
        onChange={createTagOnChangeEvent}
        onKeyDown={createTagOnEnter}
        placeholder="Enter your consumed foods"
        onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
      />
    </TagWrapper>
  )
}

export default TagBox