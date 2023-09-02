import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import { useSignOut } from '../common/slices';
import LoadingSpinner from './LoadingSpinner';

const BlueDotContainer = styled.div`
  margin-left: 0;
  @media screen and (min-width: 501px){
    margin-left: 2rem;
  }
`;

const BlueDotDropDownContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: calc(100vh - 6.5rem);
  z-index: 99999;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.white};
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 501px){
    top: 6.4rem;
    height: auto;
  }

  @media screen and (min-width: 1024px){
    width: 38rem;
    margin-right: 1rem;
  }
`;

const UserName = styled.p`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 1.2rem;
`;

const UserEmail = styled.p`
  font-size: 1.65rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const LinkText = styled.p`
  font-size: 1.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
`;

const SignOutButton = styled.button`
  margin-top: 3.5rem;
  font-size: 1.85rem;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.secondaryBtnColor};
  color: ${({ theme }) => theme.secondaryBtnTextColor};
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  
  @media screen and (min-width: 501px) and (max-width: 1023px){
    width: 50%;
  }

`;

const BlueDot = ({ userInfo }) => {
  const [isBlueDotClicked, setIsBlueDotClicked] = useState(false);
  const [{ isLoading, signOutInit, signOutError }] = useSignOut();

  useEffect(() => {
    if (signOutError && typeof (signOutError) === 'string') {
      toast.error(signOutError)
    }
  }, [signOutError])

  const handleSignOut = async () => {
    signOutInit()
  };

  const handleBlueDotClick = () => {
    setIsBlueDotClicked(!isBlueDotClicked)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <BlueDotContainer>
      <Avatar handleOnClick={() => handleBlueDotClick()} />
      {isBlueDotClicked && userInfo && <BlueDotDropDownContainer>
        <Avatar size={'lg'} />
        <UserName>{userInfo?.name || 'UserName'}</UserName>
        <UserEmail>{userInfo?.email || 'Email'}</UserEmail>
        <Link to='/profile'>
          <LinkText onClick={() => setIsBlueDotClicked(false)}> Edit Profile</LinkText>
        </Link>
        <SignOutButton onClick={handleSignOut}>
          Sign out
        </SignOutButton>
      </BlueDotDropDownContainer>}
    </BlueDotContainer>
  )
}

export default BlueDot