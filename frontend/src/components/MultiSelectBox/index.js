import React from 'react';
import { useCreateFoodMutation } from "../../slices/foodApiSlice";
import { StyledMultiBox } from './styles';

const MultiSelectBox = ({ options, selected, setSelected, handleOnMultiSelectChange, handleMultiSelectError, triggerFetchFoods }) => {
  const [createFood] = useCreateFoodMutation();

  const handleOnCreate = async (query) => {
    try {
      const newItem = { value: query, label: query };
      const newlyCreatedFood = await createFood({ ...newItem }).unwrap();
      triggerFetchFoods();
      setSelected({ ...selected, newlyCreatedFood })
      return newlyCreatedFood;

    } catch (error) {
      handleMultiSelectError(error)
    }
  }

  return (
    <StyledMultiBox
      options={options}
      value={selected}
      onChange={handleOnMultiSelectChange}
      isCreatable={true}
      onCreateOption={handleOnCreate}
    />
  )
}

export default MultiSelectBox