import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import logo from "../assets/pngs/logo.png"

const LogoTitle = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImageContainer = styled.div`
  margin-right: 1rem;
  img{
    width: 3.75rem;
    height: 3.75rem;
  }
`;

const Logo = ({ title }) => {
  return (
    <Link to="/dashboard">
      <LogoContainer>
        <LogoImageContainer>
          <img src={logo} />
        </LogoImageContainer>
        <LogoTitle>{title}</LogoTitle>
      </LogoContainer>
    </Link>
  )
}

export default Logo