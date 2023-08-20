import React from 'react'
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import { useWindowSize } from '../../hooks/useWindowResize';
import { FormButton } from '../../common/styled-components/index.js';
import PageNotFoundAnimated from "../../components/PageNotFoundAnimated"

const PageNotFoundHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.primaryColor}; 

  @media screen and (min-width: 501px){
    font-size: 3rem;
  }
`;

const PageNotFound = () => {
  const [screenWidth] = useWindowSize();

  const getWidth = (width) => {
    //Mobile screens
    if(width <= 500){
      return '100%'
    }
    //Tablet screens
    else if(width >= 501 && width <=1023){
      return '600px'
    }
    //Laptops and above screens
    else{
      return '900px'
    }
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: "3rem" }}>
        <PageNotFoundHeader>Sorry, page not found!</PageNotFoundHeader>
        <Link to={'/dashboard'}>
          <FormButton>
            Go to HomePage
          </FormButton>
        </Link>
      </div>
      <PageNotFoundAnimated width={getWidth(screenWidth)} />
    </div>
  )
}

export default PageNotFound