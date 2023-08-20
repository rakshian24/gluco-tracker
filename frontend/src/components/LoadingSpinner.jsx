import React from 'react';
import { styled, useTheme } from 'styled-components';

const LoadingSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = ({ width = '200px' }) => {
  const theme = useTheme();
  return (
    <LoadingSpinnerContainer>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M21 50A29 29 0 0 0 79 50A29 31 0 0 1 21 50" fill={theme.primaryColor} stroke="none">
          <animateTransform attributeName="transform" type="rotate" dur="1.282051282051282s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
        </path>
      </svg>
    </LoadingSpinnerContainer>
  )
}

export default LoadingSpinner