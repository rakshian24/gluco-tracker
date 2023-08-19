import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const LogoTitle = styled.div`
  font-size: 3rem;
  color: #4ab9a4;
`;

const Logo = ({ title }) => {
  return (
    <Link to="/dashboard">
      <LogoTitle>{title}</LogoTitle>
    </Link>
  )
}

export default Logo