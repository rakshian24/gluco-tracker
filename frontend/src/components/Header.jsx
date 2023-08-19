import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from './Logo';
import BlueDot from './BlueDot';
import { BUTTON_TYPE } from '../constants';
import { Button } from '../common/styled-components';

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { ADD } = BUTTON_TYPE;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <Logo title="Auth App" />
      <HeaderRightContainer>
        {userInfo && pathname !== '/reading/create' && <Button
          buttontype={ADD}
          onClick={() => navigate('/reading/create')}
        >
          Create Reading
        </Button>}
        {userInfo && <BlueDot userInfo={userInfo} />}
      </HeaderRightContainer>
    </StyledHeader>
  )
}

export default Header