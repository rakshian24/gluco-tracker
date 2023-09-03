import React, { useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';

import { StyledMultiBox } from './styles';
import { useFetchFoods } from '../../common/slices';
import LoadingSpinner from '../LoadingSpinner';

const MultiSelectBox = ({ selectedMultiValue, handleOnMultiSelectInputChange, handleOnMultiSelectChange, handleOnCreateFood }) => {
  const [foods, { fetchFoodsInit, isFetchFoodsLoading }] = useFetchFoods();

  useEffect(() => {
    fetchFoodsInit()
  }, [])

  if (isFetchFoodsLoading) {
    return <LoadingSpinner />
  }

  return (
    <CreatableSelect
      isMulti
      getOptionLabel={e => e.label}
      getOptionValue={e => e._id}
      value={selectedMultiValue}
      options={foods}
      onInputChange={handleOnMultiSelectInputChange}
      onChange={handleOnMultiSelectChange}
      onCreateOption={handleOnCreateFood}
    />
  )
}

export default MultiSelectBox