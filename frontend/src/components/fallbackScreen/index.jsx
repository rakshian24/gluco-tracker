import React from 'react';
import { styled } from 'styled-components';
import { FormButton } from '../../common/styled-components';
import { Link } from 'react-router-dom';

const FallBackScreenContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const FallbackScreenHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.darkColor}; 

  @media screen and (min-width: 501px){
    font-size: 3rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.darkColor}; 

  @media screen and (min-width: 501px){
    font-size: 2.25rem;
  }
`;

const FallBackScreen = ({ title, subtitle, showCta, ctaLink, ctaText, svgComponent }) => {
  return (
    <FallBackScreenContainer>
      <FallbackScreenHeader>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {showCta && ctaLink && <Link to={ctaLink}>
          <FormButton style={{marginTop: "2.5rem"}}>
            {ctaText}
          </FormButton>
        </Link>}
      </FallbackScreenHeader>
      {svgComponent}
    </FallBackScreenContainer>
  )
}

export default FallBackScreen