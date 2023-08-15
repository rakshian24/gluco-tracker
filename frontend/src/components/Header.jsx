import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

import Logo from './Logo';
import BlueDot from './BlueDot';

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <StyledHeader>
      <Logo title="Auth App" />
      {userInfo && <BlueDot userInfo={userInfo} />}
    </StyledHeader>
  )
}

export default Header