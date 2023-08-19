import React from 'react';
import Select from 'react-select';

// import { useWindowSize } from '../hooks/useWindowResize';

const SelectDropdown = ({ selectedValue, setSelectedValue, dropDownOptions, placeholder }) => {
  // const [screenWidth] = useWindowSize();
  // const isLargeScreen = screenWidth > 500;
  return <Select
    isSearchable={false}
    options={dropDownOptions}
    onChange={(val) => setSelectedValue(val)}
    value={selectedValue}
    placeholder={placeholder}
    styles={{
      option: (styles) => ({
        ...styles,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '1.65rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem'
      }),
      control: (baseStyles) => ({
        ...baseStyles,
        minHeight: '5rem',
        height: '5rem',
        width: '100%',
        fontSize: '1.65rem',
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid #8498e2',
        borderRadius: '1rem'
      }),
      valueContainer: (baseStyles) => ({
        ...baseStyles,
        height: '5rem',
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '1.5rem'
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
        fontFamily: 'Roboto'
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
    }}
  />

}

export default SelectDropdown