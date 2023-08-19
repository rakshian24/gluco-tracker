import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useSignOutMutation } from '../slices/userApiSlice';
import { clearCredentials } from '../slices/authSlice';

const BlueDotContainer = styled.div`
  margin-left: 0;
  @media screen and (min-width: 501px){
    margin-left: 2rem;
  }
`;

const BlueDotDropDownContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: auto;
  z-index: 99999;
  position: absolute;
  top: 6.4rem;
  right: 0;
  background: #ffffff;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

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
  color: #0077c5;
  cursor: pointer;
`;

const SignOutButton = styled.button`
  margin-top: 3.5rem;
  font-size: 1.85rem;
  border: none;
  outline: none;
  background: #e3e5e8;
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut] = useSignOutMutation();

  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      dispatch(clearCredentials());
      navigate('/sign-in');
    } catch (err) {
      console.error(err);
    }
  };

  const handleBlueDotClick = () => {
    setIsBlueDotClicked(!isBlueDotClicked)
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