import React, { useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { useTheme } from 'styled-components';

import { useFetchFoods } from '../../common/slices';
import LoadingSpinner from '../LoadingSpinner';
import { useWindowSize } from '../../hooks/useWindowResize';

const MultiSelectBox = ({ selectedMultiValue, handleOnMultiSelectInputChange, handleOnMultiSelectChange, handleOnCreateFood }) => {
  const [foods, { fetchFoodsInit, isFetchFoodsLoading }] = useFetchFoods();
  const theme = useTheme();
  const [screenWidth] = useWindowSize();
  const isLargeScreen = screenWidth > 500;

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
      styles={{
        option: (styles, state) => ({
          ...styles,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '1.65rem',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          backgroundColor: state.isSelected ? theme.lightGrey : theme.white,
          color: theme.primaryColor
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: '5rem',
          height: 'auto',
          width: isLargeScreen ? '95%' : '100%',
          fontSize: '1.65rem',
          cursor: 'pointer',
          fontFamily: 'inherit',
          border: `1px solid ${theme.textBoxBorderColor}`,
          borderRadius: '1rem',
          boxShadow: state.isFocused ? `${theme.textBoxBorderColor} 0px 0px 0px 0.5px` : '0'
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          height: 'auto',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '1.65rem',
          fontSize: '1.65rem'
        }),
        container: (baseStyles) => ({
          ...baseStyles,
          width: '100%',
          fontFamily: 'inherit',
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          fontSize: '1.65rem',
          fontFamily: 'Roboto',
        }),
        indicatorsContainer: (baseStyles) => ({
          ...baseStyles,
          height: '5rem',
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          margin: '0px',
          fontFamily: 'Roboto',
          outline: 'none !important',
          border: 'none !important',
          boxShadow: 'none !important',
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
      }}
    />
  )
}

export default MultiSelectBox