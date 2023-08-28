import { themes } from "../constants"

export const appThemes = {
  [themes.green]: {
    primaryColor: '#4AB9A4',
    secondaryColor: '#31ABC0',
    white: '#ffffff',
    primaryGrey: '#D7D8D9',
    lightGrey: '#F2F2F2',
    secondaryGrey: '#aaa',
    linearGradientColor: 'linear-gradient(175deg, rgba(74,185,164,1) 34%, rgba(49,171,192,1) 92%)',
    blackColor: '#000000',

    // Button
    primaryBtnColor: 'linear-gradient(175deg, rgba(74,185,164,1) 34%, rgba(49,171,192,1) 92%)',
    primaryBtnHoverColor: 'linear-gradient(175deg, rgba(72,183,169,1) 34%, rgba(48,171,197,1) 92%)',
    primaryBtnTextColor: '#ffffff',

    secondaryBtnColor: '#e3e5e8',
    secondaryBtnHoverColor: '#D7D8D9',
    secondaryBtnTextColor: '#404040',

    //TextInputs
    textBoxBorderColor: '#2DA9C7',
    placeholderColor: '#273178',
    errorTextColor: '#ff4d42'
  },
  [themes.violet]: {
    primaryColor: '#cf96cf',
    secondaryColor: '#6b74b3',
    white: '#ffffff',
    primaryGrey: '#D7D8D9',
    lightGrey: '#F2F2F2',
    secondaryGrey: '#aaa',
    linearGradientColor: 'linear-gradient( 88.7deg,  rgba(207,150,207,1) -2.4%, rgba(107,116,179,1) 102% );',
    blackColor: '#000000',

    // Button
    primaryBtnColor: 'linear-gradient( 88.7deg,  rgba(207,150,207,1) -2.4%, rgba(107,116,179,1) 102% );',
    primaryBtnHoverColor: 'linear-gradient( 88.7deg,  rgba(207,150,207,1) -2.4%, rgba(107,116,179,1) 102% );',
    primaryBtnTextColor: '#ffffff',

    secondaryBtnColor: '#e3e5e8',
    secondaryBtnHoverColor: '#D7D8D9',
    secondaryBtnTextColor: '#404040',

    //TextInputs
    textBoxBorderColor: '#6b74b3',
    placeholderColor: '#273178',
    errorTextColor: '#ff4d42'
  }
}